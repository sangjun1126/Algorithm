function solution(n, left, right) {
    var answer = [];
    
    while(left <= right) {
        answer.push(Math.max(~~(left/n), left % n) + 1);
        left ++
    }
    return answer;
}