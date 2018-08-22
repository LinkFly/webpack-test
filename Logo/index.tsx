import * as React from 'react';
import {get} from 'lodash';
import * as moment from 'moment';
import './test-big.jpg';

import style from './style.less';


export default class Logo extends React.Component<any, any> {
    render() {
        return (
            <a href="/" className='ll-logo'>Lingualeo</a>
        );
    }
}
