const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N, K;
let matrix = [];
let dx = [0, 0, 0, 1, -1];
let dy = [0, 1, -1, 0, 0];

rl.on("line", (line) => {
  if (input.length === 0) {
    input.push(line);
    [N, K] = input[0].split(" ").map(Number);
  } else {
    input.push(line.trim());
  }
  if (input.length === N + K + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  let score = [];
  for (let i = 1; i <= N; i++) {
    matrix.push(input[i].trim().split(" "));
  }
  for (let i = 0; i < N; i++) {
    score[i] = new Array(N).fill(0);
  }

  for (let i = N + 1; i <= N + K; i++) {
    let [x, y] = input[i].trim().split(" ").map(Number);
    x -= 1;
    y -= 1;
    for (let j = 0; j < 5; j++) {
      let nx = x + dx[j];
      let ny = y + dy[j];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && matrix[nx][ny] !== "#") {
        if (matrix[nx][ny] === "@") {
          score[nx][ny] += 2;
        } else {
          score[nx][ny] += 1;
        }
      }
    }
  }

  const result = Math.max(...score.flat());
  console.log(result);
  process.exit();
});
