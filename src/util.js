// HELPER FUNCTIONS

// Named Export- good for exporting multiple functions per file
// Need to use curlys { } when importing. ex: import { calcualteWinner } from...
export const calculateWinningLine = (squares) => {
  // squares ==
  // [
  //   null, null, null, null, null, null, null,
  //   null, null, null, null, null, null, null,
  //   null, null, null, null, null, null, null,
  //   null, null, null, null, null, null, null,
  //   null, null, null, null, null, null, null,
  //   null, null, null, null, null, null, null
  // ]

  // [
  //   0,  1,  2,  3,  4,  5,  6,
  //   7,  8,  9,  10, 11, 12, 13,
  //   14, 15, 16, 17, 18, 19, 20,
  //   21, 22, 23, 24, 25, 26 ,27,
  //   28, 29, 30, 31, 32, 33, 34,
  //   35, 36, 37, 38, 39, 40, 41
  // ]

  // find all possible winning moves
  const winningRows = [ 
    [0,  1,  2,  3],  [1,  2,  3,  4],  [2,  3,  4,  5],  [3,  4,  5,  6],
    [7,  8,  9,  10], [8,  9,  10, 11], [9,  10, 11, 12], [10, 11, 12, 13],
    [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
    [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
    [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
    [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41]
  ];

  const winningCols = [
    [0, 7,  14, 21], [7,  14, 21, 28], [14, 21, 28, 35],
    [1, 8,  15, 22], [8,  15, 22, 29], [15, 22, 29, 36],
    [2, 9,  16, 23], [9,  16, 23, 30], [16, 23, 30, 37],
    [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
    [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
    [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
    [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41]
  ];

  const winningLeftDiags = [
    [14, 22, 30, 38], 
    [7,  15, 23, 31], [15, 23, 31, 39],
    [0,  8,  16, 24], [8, 16, 24, 32], [16, 24, 32, 40],
    [1,  9,  17, 25], [9, 17, 25, 33], [17, 25, 33, 41],
    [2,  10, 18, 26], [ 10, 18, 26, 34],
    [3,  11, 19, 27]
  ];

  const winningRightDiags = [
    [21, 15, 9,  3],
    [28, 22, 16, 10], [22, 16, 10, 4],
    [35, 29, 23, 17], [29, 23, 17, 11], [23, 17, 11, 5],
    [36, 30, 24, 18], [30, 24, 18, 12], [24, 18, 12, 6],
    [37, 31, 25, 19], [31, 25, 19, 13], 
    [38, 32, 26, 20]
  ];

  // loop through them and see if any one board have all same values
  const allLines = [winningRows, winningCols, winningLeftDiags, winningRightDiags];
  let winner;
  for (let i = 0; i < allLines.length; i++) {
    let lines = allLines[i];    // 2D array ex. winningRows

    winner = findWinningLines(lines, squares);

    if (winner) {
      return winner;
    }
  }

  // check if there's a draw
  return (squares.every((value)=> value != null)) ?  ('tie') : null; 
};



// Takes in 2D array of moves, returns array of winning moves (if any)
// returns null if no winning moves
// ex. lines == winningRightDiags
function findWinningLines(lines, squares) {
  // Loop through each line in moves 2D aray
  for (let i = 0; i < lines.length; i++) {
    // debugger
    let line = lines[i];
    // ex. line = [21, 15, 9, 3]

    const firstPos = line[0];
    // firstPostion = 21

    // If all values in squares array at line position are the same (and not null)
    if (line.every((position) => {
      return ((squares[position] === squares[firstPos]) && squares[firstPos] != null);
    })) {
      return line;
    }
  }
}
