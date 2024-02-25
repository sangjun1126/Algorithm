let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let answer = 0;

a = a.split('').reverse();

for (let i = 0; i < a.length; i++) {
    const utf = a[i].charCodeAt();

    if (utf >= 65 && utf <= 90) {
        answer += (utf - 55) * (b ** i);
    } else {
        answer += Number(a[i]) * (b ** i);
    }
}

console.log(answer);
