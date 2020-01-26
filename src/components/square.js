import React from 'react';

function Square(props) {
  return (
    <button 
      className="square" 
      onClick={props.onClick}
    >
      {/* {props.position}
      {" "} */}
      {/* <span className={`${props.color}`}>{props.value}</span> */}
      <span className={`${props.color}`}></span>
    </button>
  );
};

export default Square;