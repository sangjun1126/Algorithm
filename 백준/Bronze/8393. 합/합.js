const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const num = Number(input[0]);
let answer = 0;
for (let i = 1; i <= num; i++) {
    answer += i
}

console.log(answer)