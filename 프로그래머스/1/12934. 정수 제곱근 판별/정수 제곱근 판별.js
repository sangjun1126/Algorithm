function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) {
        answer = -1
    } else {
        answer = Math.pow(sqrt+1, 2);
    }
    return answer;
}