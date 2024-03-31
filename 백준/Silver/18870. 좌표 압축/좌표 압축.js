const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const data = input[1].split(' ').map(Number);

const uniqueData = [...new Set(data)];
uniqueData.sort((a,b) => a-b);

let map = new Map();
uniqueData.map((i, index) => map.set(i , index))

let answer = '';
data.map((x) => answer += map.get(x) + ' ');
console.log(answer)