const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

input.map(x => console.log(x.substring(0,1) + x.substring(x.length - 1, x.length)))