const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let num = 0;
let numIndex = 0;

function countOnes(num) {
  let count = 0;
  while (num) {
    num &= num - 1;
    count++;
  }
  return count;
}

rl.on("line", (line) => {
  input.push(line.trim());
  if (num === 0) {
    [num, numIndex] = input[0].split(" ").map(Number);
  }
  if (input.length - 1 === num) {
    rl.close();
  }
});

rl.on("close", () => {
  let numList = input[1].split(" ").map(Number);
  let newList = numList.map((x) => [x, countOnes(x)]);
  newList.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
  console.log(newList[numIndex - 1][0]);
  process.exit();
});
