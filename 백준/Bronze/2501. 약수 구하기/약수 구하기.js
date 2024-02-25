const [n,k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let answer = [];

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        answer.push(i);
    }
}

if (answer.length < k) {
    console.log(0)
} else {
    console.log(answer[k-1])
}