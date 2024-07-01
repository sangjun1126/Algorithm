let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = [`3 4`, `ohhenrie`, `charlie`, `baesangwook`, 
//				`obama`, `baesangwook`, `ohhenrie`, `clinton`]
let [N, M] = input[0].split(' ').map(Number);

let notListen = new Set(input.slice(1, N+1));
let notSee = input.slice(N+1);
let answer = [];

for (let i = 0; i < M; i++) {
    if (notListen.has(notSee[i])) {
        answer.push(notSee[i]);
    }
}

answer.sort();
console.log(answer.length);
console.log(answer.join('\n'))