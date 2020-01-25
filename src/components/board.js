import React from 'react';
import Square from './square';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(42).fill(null),
      xIsNext: true,
    };
    // squares ==
    // [
    //   null, null, null, null, null, null, null,
    //   null, null, null, null, null, null, null,
    //   null, null, null, null, null, null, null,
    //   null, null, null, null, null, null, null,
    //   null, null, null, null, null, null, null,
    //   null, null, null, null, null, null, null,
    // ]
  }


  handleClick(i) {
    // Make copy of squares state
    const squares = this.state.squares.slice();

    let positionNextRow = i + 7;

    // Only "drop" item if current value in squares array is null
    if (squares[i] === null) {
  
      // Determine where in the squares array we want to "drop" the X/O
      // keep adding + 7 until we reach a val that's not null or off board
      // check next row (+ 7)
      // if next row is NOT null, drop counter at i
      if (positionNextRow != null) {
        // TO FINISH LATER
        squares[i] = this.state.xIsNext ? 'X' : 'O';
      }

      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  }


  renderSquare(i) {
    return (
      <Square 
        // value={this.state.squares[i]}
        value={i}
        onClick={() => this.handleClick(i)}
      />
    );
  }


  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    // REFACTOR LATER
    // let col = [0, 1, 2, 3, 4, 5, 6];
    // let cols = col.map( (i) => {
    //   return this.renderSquare(i);
    // });

    // let row = [0, 1, 2, 3, 4, 5];
    // let rows = row.map((i) => {
    //   return <div className="board-row">{cols}</div>;
    // });

    // // rows = 6
    // for (let i = 0; i < 6; i++) {
    //   for (let j = 0; j < 7; j++) {
    //   }
    // }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
        </div>
        <div className="board-row">
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
        </div>
        <div className="board-row">
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
        </div>
        <div className="board-row">
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
        </div>
        <div className="board-row">
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
        </div>
      </div>
    );
  }
}

export default Board;