const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(x => x.length);
let max = Math.max(...arr);
let answer= '';

for (let i = 0; i < max; i++) {
    for (let j = 0; j < input.length; j++) {
        if (input[j][i] === undefined) continue;
        else answer += input[j][i]
    }
}

console.log(answer)