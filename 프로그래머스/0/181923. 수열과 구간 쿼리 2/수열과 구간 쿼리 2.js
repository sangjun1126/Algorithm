function solution(arr, queries) {
    var answer = [];
    var tmp = arr;
    queries.map(([s,e,k]) => {
      let filteredValue = tmp.slice(s , e + 1).filter((value) => value > k)
      let res = filteredValue.length ? Math.min(...filteredValue) : -1
      tmp.push(arr.filter((value) => value !== res))
        answer.push(res)
    })
    return answer;
}