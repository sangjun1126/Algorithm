function solution(arr, queries) {
    var answer = arr;
    queries.map(([i,j]) => {
        [answer[i], answer[j]] = [answer[j], answer[i]];
    })
    return answer;
}