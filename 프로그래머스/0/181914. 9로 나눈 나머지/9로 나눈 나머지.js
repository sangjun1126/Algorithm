function solution(number) {
    var answer = 0;
    return [...number].reduce((acc, cur) => acc+Number(cur), 0)%9;
    return answer;
}