const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a,b,c] = input

const cnt = b.split(' ').filter((x) => x === c).length;

console.log(cnt)