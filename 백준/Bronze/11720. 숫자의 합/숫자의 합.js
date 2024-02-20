const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num_len = Number(input[0]);
let num_1 = input[1].split('');
let answer = 0;

for (let i = 0; i < num_1.length; i++) {
    answer += Number(num_1[i])
}

console.log(answer)