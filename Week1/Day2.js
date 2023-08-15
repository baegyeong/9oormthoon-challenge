const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const num = parseInt(lines[0]);
  const numbers = [];

	for (let i = 0; i < num; i++) {
    numbers.push(parseInt(lines[i+2]));
  }

  let sum = numbers.reduce((a,b)=>a+b);
	let [T, M] = lines[1].split(' ').map(Number);
	T = T + parseInt(sum/60);
	M = M + parseInt(sum%60);
	if(M>=60){
		T += 1;
		M -= 60;
	}	
	
	console.log(`${T%24} ${M}`);
	process.exit();
});
