const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = (2 ** input + 1)**2

console.log(answer)