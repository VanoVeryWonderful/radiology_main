import React from 'react';
import './App.css';
import Gallery from './Gallery';

const images = [
  'IMG-0003-00122.jpg',
  'IMG-0003-00123.jpg',
  'IMG-0003-00124.jpg',
  'IMG-0003-00125.jpg',
  'IMG-0003-00126.jpg',
]

const str = 'sdfg'

function App() {
  return (
    <div className="App">
      <Gallery images={images}></Gallery>
    </div>
  );
}

export default App;
