function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        var [s, e] = queries[i];  // 쿼리에서 s와 e를 추출
        for (let j = s; j <= e; j++) {  // s부터 e까지 순회
            arr[j] += 1;  // 각 인덱스에 1 더하기
        }
    }
    return arr;
}