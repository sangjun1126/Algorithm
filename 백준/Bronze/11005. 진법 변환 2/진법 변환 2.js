let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((x) => Number(x));

let answer = a.toString(b).toUpperCase()

console.log(answer)