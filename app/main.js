import React from 'react'
import {render} from 'react-dom'
import Component from './components/MainWrapper';
import 'antd/dist/antd.css';
let main = function(){
    render(<Component />,document.getElementById('content'));
}
main();