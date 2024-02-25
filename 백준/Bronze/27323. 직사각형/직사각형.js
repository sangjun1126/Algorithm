let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);

let area = a * b;

console.log(area);