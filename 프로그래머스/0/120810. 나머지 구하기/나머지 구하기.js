// 몫 구하기와 동일하게 Math.floor() 메서드로 풀이가 가능하다.

function solution(num1, num2) {
    var answer = 0;
    answer = Math.floor(num1%num2);
    return answer;
}