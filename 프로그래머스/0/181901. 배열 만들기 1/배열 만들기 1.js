function solution(n, k) {
    var answer = [];
    let i = k;
    while(i<=n) {
        answer.push(i);
        i += k;
    }
    return answer;
}