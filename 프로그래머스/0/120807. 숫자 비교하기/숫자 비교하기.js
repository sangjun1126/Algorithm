// 조건문 단순 비교 문제이며, 해당 문제는 삼항연산자로 리팩토링이 가능함

function solution(num1, num2) {
    var answer = 0;
    if(num1==num2){
        answer=1;
    }else {
        answer=-1;
    }
    return answer;
}