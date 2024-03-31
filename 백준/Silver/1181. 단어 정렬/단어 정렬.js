const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input.shift());
const words = new Set(input);

const sortedWord = [...words].sort((a,b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    } else {
        return a.localeCompare(b)
    }
});

console.log(sortedWord.join('\n'))