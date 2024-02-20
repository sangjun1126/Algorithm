const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map(Number);
let array = new Array(n);

for (let i = 0; i < n; i++) {
    array[i] = i + 1;
};

for (let j = 1; j <= m; j++) {
    const [a,b] = input[j].split(' ').map(Number);
    [array[a-1], array[b-1]] = [array[b-1], array[a-1]]
}

console.log(array.join(' '))