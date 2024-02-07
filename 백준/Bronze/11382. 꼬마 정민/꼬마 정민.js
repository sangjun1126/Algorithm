const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a+b+c);