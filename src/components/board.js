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


  // ex. i = 13
  handleClick(i) {
    // Make copy of squares state
    const squares = this.state.squares.slice();

    let positionNextRow = i + 7;
    // positionNextRow = 13 + 7 = 20

    // Only "drop" item if current value in squares array is null
    if (squares[i] === null) {
  
      // Determine where in the squares array we want to "drop" the X/O
      // Keep doing down a row until we hit a piece OR off the board
      while (squares[positionNextRow] === null) {
        // squares[20] == null        null == null      true
        // squares[27] == null        null == null      true
        // squares[34] == null        null == null      true
        // squares[41] == null        null == null      true
        // squares[49] == undefined   null == null      true

        positionNextRow += 7;
        // positionNextRow = 27
        // positionNextRow = 34
        // positionNextRow = 41
        // positionNextRow = 49
      }
      
      // Place X or O in squares array
      squares[positionNextRow - 7] = this.state.xIsNext ? 'X' : 'O';
      
      // Changing state -> update board with piece
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  }


  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        position={i}
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