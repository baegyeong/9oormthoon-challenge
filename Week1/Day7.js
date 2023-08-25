const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === num + 1) {
    rl.close();
  }
});
let num, k;
rl.on("close", () => {
  [num, k] = input[0].split(" ").map(Number);

  let gameBoard = [];
  for (let i = 1; i <= num; i++) {
    gameBoard.push(input[i].split(" ").map(Number));
  }

  let count = 0;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (gameBoard[i][j] === 0) {
        let cloudCount = 0;
        if (i > 0) {
          cloudCount += gameBoard[i - 1][j];
          if (j > 0) cloudCount += gameBoard[i - 1][j - 1];
          if (j < num - 1) cloudCount += gameBoard[i - 1][j + 1];
        }
        if (i < num - 1) {
          cloudCount += gameBoard[i + 1][j];
          if (j > 0) cloudCount += gameBoard[i + 1][j - 1];
          if (j < num - 1) cloudCount += gameBoard[i + 1][j + 1];
        }
        if (j > 0) cloudCount += gameBoard[i][j - 1];
        if (j < num - 1) cloudCount += gameBoard[i][j + 1];

        if (cloudCount === k) {
          count++;
        }
      }
    }
  }

  console.log(count);
  process.exit();
});
