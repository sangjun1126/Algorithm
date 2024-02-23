function solution(n) {
    var answer = 0;
    for (let i = 0; i<=n; i++) {
    if (n % i === 0) {
        answer+= i;
    }
}
    return answer;
}

// for문을 이용한 응용문제 
// 약수 관련 알고리즘