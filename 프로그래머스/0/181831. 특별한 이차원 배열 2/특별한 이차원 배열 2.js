function solution(arr) {
    const n = arr.length;

    // 행과 열의 개수가 다르면 대칭 행렬이 아님
    if (n !== arr[0].length) {
        return 0;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // 대칭 행렬의 조건을 확인
            if (arr[i][j] !== arr[j][i]) {
                return 0; // 대칭 행렬이 아님
            }
        }
    }

    return 1; // 대칭 행렬임
}







