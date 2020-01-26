import React from 'react';
import Square from './square';
import { calculateWinningLine } from '../util';


class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(42).fill(null),
      redIsNext: true,
      winner: null,
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

    this.handleReset = this.handleReset.bind(this);
  }


  // ex. i = 13
  handleClick(i) {
    // Make copy of squares state
    const squares = this.state.squares.slice();

    let positionNextRow = i + 7;
    // positionNextRow = 13 + 7 = 20
 
    const winningLine = calculateWinningLine(squares);
    let winner;
    (winningLine != null) ? winner = squares[winningLine[0]] : winner = null;
    
    // Only "drop" item if current value in squares array is null
    if (squares[i] === null && winner == null) {
  
      // Determine where in the squares array we want to "drop" the X/O
      // Keep doing down a row until we hit a piece OR off the board
      while (squares[positionNextRow] === null) {
        positionNextRow += 7;
      }
      
      // Place X or O in squares array
      squares[positionNextRow - 7] = this.state.redIsNext ? 'red' : 'blue';
      
      // Changing state -> update board with piece
      this.setState({
        squares: squares,
        redIsNext: !this.state.redIsNext,
      });
    }
  }


  handleReset() {
    this.setState({
      squares: Array(42).fill(null),
      redIsNext: true,
      winner: null,
    });
  }


  renderSquare(i) {
    return (
      <Square 
        // value={this.state.squares[i]}
        position={i}
        color={this.state.squares[i]}
        onClick={() => this.handleClick(i)}   // !! called method style so this is captured (no need to bind)
      />
    ); 
  }


  render() {
    const { squares, redIsNext } = this.state;

    const winner = calculateWinningLine(squares);
    let status;

    if (winner) {
      status = 'Congrats! Winner: ' + squares[winner[0]];
    } else {
      status = 'Next player: ' + (redIsNext ? 'red' : 'blue');
    }

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

        <button 
          onClick={this.handleReset}
          className="reset-button"
        >RESET</button>
      </div>
    );
  }
}

export default Board;