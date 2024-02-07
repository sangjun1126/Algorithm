// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let num = Number(input[0]);

for (let j = 1; j <= 9; j++) {
    console.log(`${num} * ${j} = ${num * j}`);
}