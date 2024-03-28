const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');



const [M, N] = input[0].split(' ')
const bord = input.filter((cur,idx)=> idx != 0).map(el=>el.split('')) // 1.

let [y, x] = [M-8, N-8]
const arr = []; 
for(let yy = 0 ; yy <= y ; yy++){
  for(let xx = 0 ; xx <= x ; xx++){
    arr.push([yy,xx])
  }
}

let pattern;
let pattern2;
let count = 0;
let count2 = 0;
let result = [];

for([startY,startX] of arr){

  pattern = bord[startY][startX]
  pattern2 = bord[startY][startX] === 'B' ? 'W' : 'B';

  for(let i = startY ; i < startY+8 ; i++){
    for(let j = startX ; j < startX+8 ; j++){

      if(pattern !== bord[i][j]) count++;
      if(pattern2 !== bord[i][j]) count2++;

      pattern === 'B' ? (pattern = 'W') : ( pattern = 'B');
      pattern2 === 'B' ? (pattern2 = 'W') : ( pattern2 = 'B');
    }

    pattern === 'B' ? (pattern = 'W') : ( pattern = 'B');
    pattern2 === 'B' ? (pattern2 = 'W') : ( pattern2 = 'B');

  }

  result.push(count);
  result.push(count2);
  count2=0;
  count = 0;
}

console.log(Math.min(...result))