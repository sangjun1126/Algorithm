// Math.floor은 정수 값만 가지게 하는 자바스크립트 메서드임
// ~~로 축약해서 사용이 가능하다.

function solution(num1, num2) {
    var answer = 0;
    answer = Math.floor(num1/num2)
    return answer;
}