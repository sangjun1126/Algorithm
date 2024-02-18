function solution(money) {
    var answer = [];
    answer = [Math.floor(money/5500), money-Math.floor(money/5500)*5500];
    return answer;
}