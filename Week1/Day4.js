// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let inputLines = [];
  for await (const line of rl) {
    inputLines.push(line);
    if (inputLines.length === 2) {
      const n = parseInt(inputLines[0]);
      const arr = inputLines[1].split(" ").map(Number);

      let totalTaste = 0;
      let maxTaste = 0;
      for (let i = 0; i < n; i++) {
        totalTaste += arr[i];
        maxTaste = Math.max(maxTaste, arr[i]);
      }
      let x = arr.indexOf(maxTaste);

      let isPerfect = true;
      for (let i = 0; i < x; i++) {
        if (arr[i] > arr[i + 1]) {
          isPerfect = false;
          break;
        }
      }
      for (let i = x + 1; i < n; i++) {
        if (arr[i] < arr[i + 1]) {
          isPerfect = false;
          break;
        }
      }

      if (isPerfect) {
        console.log(totalTaste);
      } else {
        console.log(0);
      }

      rl.close();
    }
  }

  process.exit();
})();
