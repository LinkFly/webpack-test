let Logo = require('../Logo/index.tsx');
let {React, ReactDOM} = require('./react-full.tsx');
let {moment} = require('./extern-libs.tsx');

/* Я бы попробовал настроить browserify для динамической загрузки через require, для получения профита от разделения */
/*let {ReactDOM} = require('react-full');*/

ReactDOM.render(<Logo/>, document.getElementById('app'));

let datetime = document.getElementById('datetime');
datetime.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
