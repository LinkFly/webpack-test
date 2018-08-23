require('./test-big.jpg');

// тест использование moment в - sources/index.tsx
/*let {moment} = require('../sources/extern-libs');*/
let {lodash} = require('../sources/extern-libs.tsx');
let {React} = require('../sources/react-full.tsx');

import style from './style.less';

let {get} = lodash;

export default class Logo extends React.Component<any, any> {
    render() {
        return (
            <a href="/" className='ll-logo'>Lingualeo</a>
        );
    }
}
