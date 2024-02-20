const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let number = input[1].split(' ');

let numbers = number.map(function(cur) {
    return Number(cur);
});

let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < count; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    } 
    if (min > numbers[i]) {
        min = numbers[i];
    }
}

console.log(`${min} ${max}`)