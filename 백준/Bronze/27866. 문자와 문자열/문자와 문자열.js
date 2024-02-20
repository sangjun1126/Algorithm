const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let str_len = input[0].toString();
let num = Number(input[1]);

console.log(str_len[num-1])