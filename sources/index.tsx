let {Logo} = require('../Logo/index.tsx');
require('./react-full.tsx');
require('./extern-libs.tsx');

/* Я бы попробовал настроить browserify для динамической загрузки через require, для получения профита от разделения */
/*let {ReactDOM} = require('react-full');*/
let {ReactDOM, React} = window['reactFull'];

ReactDOM.render(<Logo/>, document.getElementById('app'));

window.addEventListener('load', () => {
  let datetime = document.getElementById('datetime');
  datetime.textContent = window['externLibs'].moment().format('MMMM Do YYYY, h:mm:ss a');
});


