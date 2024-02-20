const input = require('fs').readFileSync('/dev/stdin').toString();

let words = input.trim().split(' ');
let count = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
        count += 1;
    }
}

console.log(count)