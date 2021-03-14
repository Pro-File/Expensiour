import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import {Provider} from 'react-redux';
import {SpeechProvider} from '@speechly/react-client';
import store from './Redux/store';

ReactDOM.render(
<SpeechProvider appId="7ed35064-c001-47db-91ca-e26987634b28" language="en-US">

<Provider store={store}>
<App/>
</Provider>

</SpeechProvider>,
document.getElementById('root')
);

