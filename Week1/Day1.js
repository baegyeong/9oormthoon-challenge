const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
let array = [];
rl.on('line', (line) => {
	input = line;
	[W, S] = input.split(' ').map(Number)
	rl.close();
});

rl.on('close', () => {
	console.log(parseInt(W*(1+(S/30))));	
	process.exit();
})