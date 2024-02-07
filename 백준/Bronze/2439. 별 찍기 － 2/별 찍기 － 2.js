const input = require('fs').readFileSync('/dev/stdin').toString();

function solution(num) {
    let i = 0;
    while(i < num) {
        console.log(' '.repeat(num - (i + 1)) + '*'.repeat(i + 1))
        i++
    }
}

solution(+input)