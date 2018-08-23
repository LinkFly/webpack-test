/*import style from './style.less';*/
require('./style.less');
require('./test-big.jpg');

// тест использование moment в - sources/index.tsx

let {lodash} = window['externLibs'];


let {React} = window['reactFull'];

let {get} = lodash;

export class Logo extends React.Component<any, any> {
    render() {
        return (
            <a href="/" className='ll-logo'>Lingualeo</a>
        );
    }
}
