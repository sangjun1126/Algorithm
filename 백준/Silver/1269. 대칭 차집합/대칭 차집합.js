const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [_, arr1, arr2] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = arr1.split(' ');
const b = arr2.split(' ');

let cnt = a.length + b.length;
const aAndB = [...new Set(a.concat(b))];

console.log(aAndB.length * 2 - cnt);