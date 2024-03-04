var input = require('fs').readFileSync('dev/stdin').toString().trim().split(" ");

input = input.map((item) => Number(item));

var max = Math.max(...input);

let sum = input.reduce((acc, currentValue) => acc + currentValue, 0);

if ((sum - max) > max) {
    console.log(sum);
} else {
    console.log((sum - max) * 2 - 1)
}