const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	input[0] = input[0].split(' ');
	let n = +input[0][0];
    let m = +input[0][1];
    let animalArr = Array(n + 1).fill(undefined);
    let animalObj = {};
    let result = [];

    for (let i = 1; i <= n; i++) {
	    let animal = input[i];
	    animalArr[i] = animal;
	    animalObj[animal] = i;
    }

    for (let i = n + 1; i <= n + m; i++) {
	    let quiz = input[i];
    	if (isNaN(+quiz)) console.log(animalObj[quiz]);
	    else console.log(animalArr[+quiz]);
    }
	    process.exit();
});