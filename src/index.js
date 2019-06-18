import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from './Gallery';
import * as serviceWorker from './serviceWorker';

let urls = [
  './NormalBrainImages/IMG-0003-00122.jpg',
  './NormalBrainImages/IMG-0003-00123.jpg',
  './NormalBrainImages/IMG-0003-00124.jpg',
  './NormalBrainImages/IMG-0003-00125.jpg',
  './NormalBrainImages/IMG-0003-00126.jpg',
]


ReactDOM.render(<Gallery imageUrls={urls}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
