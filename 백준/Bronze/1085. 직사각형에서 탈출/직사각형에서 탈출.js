let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let x = Number(input[0]);
let y = Number(input[1]);
let w = Number(input[2]);
let h = Number(input[3]);

let arr = [x,w-x,y,h-y];
let answer = Math.min(...arr);
console.log(answer)