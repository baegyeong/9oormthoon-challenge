const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.trim());
	
	if(input.length === Number(input[0])+1){
		rl.close();
	}
});

rl.on('close', () => {
	let num = Number(input[0]);
	let answer = 0;
	for(let i=0; i<num; i++){
		let [x1, operator, x2] = input[i+1].split(" ");
		x1 = Number(x1);
		x2 = Number(x2);
		
		switch(operator){
			case '+':
				answer += x1 + x2;
				break;
			case '-':
				answer += x1 - x2;
				break;
			case '*':
				answer += x1 * x2;
				break;
			case '/':
				answer += parseInt(x1 / x2);
				break;
			default:
				break;
		}
	}
	
	console.log(answer);
})