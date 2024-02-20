const N = require('fs').readFileSync(0).toString().split('\n').map(Number);

let x = [];

for (let i = 1; i < 31; i++) {
    if (N.includes(i)) continue;
    x.push(i)
}

x.sort((a,b) => a-b);
console.log(`${x[0]}\n${x[1]}`)