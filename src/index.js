import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


let urls = [
  './NormalBrainImges/IMG-0003-00123.jpg',
  './NormalBrainImges/IMG-0003-00124.jpg',
  './NormalBrainImges/IMG-0003-00125.jpg',
  './NormalBrainImges/IMG-0003-00125.jpg',
]
console.log(urls[0]);

const application = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render(application, document.getElementById('root'));

serviceWorker.unregister();
