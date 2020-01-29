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


// TO DO:
// - Refactor board.js to reduce number of calls to helper function calcWinningLines
// - Highlight whole column on mouse over
// - Highlight winning 4 lines
// - Refactor component to generate board- don't make it manually
// - AI


// FINISHED
// - determine if there is a tie/alert user
// - refactor css for mobile layout
// - Make pieces colors instead of X's or O's
// - Determine winner
// - Reset Button