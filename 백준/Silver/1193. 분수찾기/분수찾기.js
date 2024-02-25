const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = Number(input);
let value = 1;

while(true) {
    num -= value;
    if (num <= 0) {
        num += value;
        break;
    }
    value += 1;
}

if (value % 2 === 1) {
    console.log(`${value - (num - 1)}/${1 + (num - 1)}`)
} else {
    console.log(`${1 + (num - 1)}/${value - (num - 1)}`)
}
