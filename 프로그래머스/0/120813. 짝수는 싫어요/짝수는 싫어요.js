function solution(n) {
    var answer = [];
    let odd = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            odd.push(i) 
        } else {
            answer.push(i)
        }
    }
    return answer;
}