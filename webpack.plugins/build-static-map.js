let path = require('path');
let fs = require('fs');

function BuildStaticMap({options: {dir, ext, outputDir, staticMapFile}}) {//{options: {dir, ext}}) {
  // Setup the plugin instance with options...
  this.dir = dir;
  this.ext = ext;
  this.outputDir = outputDir;
  this.staticMapFile = staticMapFile;
}

BuildStaticMap.prototype.apply = function(compiler) {
  let res = {};
  compiler.plugin('done', () => {
    fs.writeFile(this.staticMapFile, JSON.stringify(res), function(error){
      if(error) throw error;
    });
  });
  compiler.plugin('emit', (compilation, callback) => {
    for(let filename in compilation.assets) {
      let pathObj = path.parse(filename);
      if (pathObj.ext === '.js') {
        let name = path.parse(pathObj.name).name;
        let outputName = path.join(this.outputDir, filename);
        let assetName = path.join(this.dir, `${name}.${this.ext}`);
        res[assetName] = outputName;
      }
    }
    callback();
  });
};

module.exports = BuildStaticMap;
