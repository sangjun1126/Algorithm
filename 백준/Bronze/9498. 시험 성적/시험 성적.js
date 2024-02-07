// 시험 점수를 입력받아 90 ~ 100점은 A, 
// 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const grade = Number(input[0]);

if (grade >= 90 && grade <= 100) {
    console.log('A');
} else if (grade >= 80 && grade < 90) {
    console.log('B');
} else if (grade >= 70 && grade < 80) {
    console.log('C'); 
} else if (grade >= 60 && grade < 70) {
    console.log('D');
} else {
    console.log('F');
}