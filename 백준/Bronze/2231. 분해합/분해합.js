const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Sum(number){
  return `${number}`.split('').map(el=>+el).reduce((acc,cur)=>acc+cur) + number
}

const N = Number(input[0]); // 1.
const min = N < 10 ? 1 : N - (`${N}`.length * 9) // 2.
const result = [0] // 3.

for(let i = min ; i <= N ; i++){
  if(Sum(i) === N){
    result.push(i)
    break;
  }
}

// 5.
console.log(result.at(-1))