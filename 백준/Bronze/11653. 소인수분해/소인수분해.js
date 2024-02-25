let input = require('fs').readFileSync(0, {encoding : 'utf-8'}).split('\n').map(Number);

let n = input.shift();
let answer = [];

for (let i = 2; i <= n; i++) {
    while(n % i === 0) {
        n /= i;
        answer.push(i);
    }
    if(n === 1) break;
}

answer.forEach((number) => console.log(number))