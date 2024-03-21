function solution(A, B) {
    var answer = 0;
    
    A.sort((a,b) => b-a);
    B.sort((a,b) => a-b);
    
    for (const a of A) {
        const max = B[B.length -1];
        if (a < max) {
            answer += 1;
            B.pop()
        }
    }
    return answer;
}