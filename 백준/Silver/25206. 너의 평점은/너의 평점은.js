const infos = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item=>item.split(' '));

let sum = 0;
let total = 0;

const table = {
	"A+": 4.5, A0: 4.0,
	"B+": 3.5, B0: 3.0,
	"C+": 2.5, C0: 2.0,
	"D+": 1.5, D0: 1.0,
	F: 0.0
} 

for(let [sub, score, grade] of infos) {
   
    let num = 0;
    
   if(grade==='P') {
        continue;
    } 
    sum += Number(score)*table[grade]
    total += Number(score); 
} 
console.log(sum/total); 