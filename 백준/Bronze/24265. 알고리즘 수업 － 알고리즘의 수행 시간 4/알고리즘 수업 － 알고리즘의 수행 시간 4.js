const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
console.log(0.5*n**2 - 0.5*n)
console.log(2)