const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

let sum = 0;

for (const num of input) {
    sum += num;
}

const asc = input.sort((a,b) => a-b);
const medium = ~~(asc.length / 2);
console.log(sum / input.length, asc[medium])