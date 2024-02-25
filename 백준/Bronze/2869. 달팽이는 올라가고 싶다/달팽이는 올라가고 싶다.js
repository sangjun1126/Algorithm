// A는 이동 (증가), B는 미끄러짐 (감소), V는 높이임
// (높이 - 미끄러짐) / (이동 - 미끄러짐)의 식으로 풀 수 있음

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let A = input[0];
let B = input[1];
let V = input[2];

console.log(Math.ceil((V - B) / (A - B)))