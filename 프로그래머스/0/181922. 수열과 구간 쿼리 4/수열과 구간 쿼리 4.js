function solution(arr, queries) {
    var answer = arr;
    queries.map(([s,e,k]) => {
         answer.map((value, index) => {
            if(index >= s && index <= e && index % k === 0) {
                answer[index] += 1
            }
        })
    })
    return answer;
}