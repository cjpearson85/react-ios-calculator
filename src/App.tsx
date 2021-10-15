import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="display">
        <p>0</p>
      </div>
      <button className="top-row">AC</button>
      <button className="top-row">+/-</button>
      <button className="top-row">%</button>
      <button className="operator">÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="operator">×</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="operator">-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="operator">+</button>
      <button className="zero">
        <p>0</p>
      </button>
      <button>.</button>
      <button className="operator">=</button>
    </div>
  )
}

export default App;
