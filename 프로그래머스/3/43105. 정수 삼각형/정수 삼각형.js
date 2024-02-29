function solution(triangle) {
    var answer = triangle.slice();
    
    for (let i = answer.length -2; i >= 0; i--) {
        for (let j = 0; j < answer[i].length; j++) {
            answer[i][j] += Math.max(answer[i+1][j], answer[i+1][j+1])
        }
    }
    return answer[0][0];
}