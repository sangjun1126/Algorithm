const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const piece = [1,1,2,2,2,8];
let arr = [];

arr = piece.map((i,j) => i - input[j]);

console.log(arr.join(' '))