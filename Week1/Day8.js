const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on('line', (line) => {
	input = Number(line);
	rl.close();
});

rl.on('close', () => {
	let arr = [1, 7, 14];
	let result = 0;
	let temp = [];
	while(input>0){
		temp = arr.map(x=>(input>=x?parseInt(input/x):1000000000));
		min = Math.min(...temp);
		result += min;
		input -= arr[temp.indexOf(min)]*min;
	}

	console.log(result)
	process.exit();
})