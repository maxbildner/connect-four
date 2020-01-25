import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import './index.css';
 
// ENTRY FILE
// Wait for DOM to load, then load root component
document.addEventListener('DOMContentLoaded', ()=> {
  // grab root element
  const root = document.getElementById('root');

  // Load root component in place of root element
  ReactDOM.render(<Root/>, root);
});