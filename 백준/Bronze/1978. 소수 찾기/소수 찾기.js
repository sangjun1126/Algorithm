const input = require('fs').readFileSync(0, {encoding : "utf-8"}).split('\n');

const num = Number(input.shift());
const arr = input.shift().split(' ').slice(0, num).map(Number);

let answer = arr.filter((num) => {
    for (let i = 2; num > i; i+=1) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1;
}).length

console.log(answer)