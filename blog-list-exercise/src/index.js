import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import '../src/App.css';
import App from './view/App.js';
import './posts/jsonData'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();