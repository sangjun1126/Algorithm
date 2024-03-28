const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const inputNumber = Number(input[0])
let count = 0;
let number = 1;
const reg = /666/;

while(true){
    number++
    reg.test(number) && count++
    if(count == inputNumber) break;
}

console.log(number)