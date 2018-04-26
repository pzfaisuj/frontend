import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'styles/index.css';

import App from './components/Main';

import registerServiceWorker from './registerServiceWorker';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();