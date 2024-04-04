function solution(N, road, K) {
    const dp = new Array(N).fill().map(_ => new Array(N).fill(Infinity));
    
    for (let i = 0; i < N; i += 1) dp[i][i] = 0;
    
    const recursive = (start, end, value) => {
        if (value > K) return; // 문제 효율성을 위한 처리 (채워진 그래프를 원할 시 삭제)
        
        if (dp[start][end] > value) {
            dp[start][end] = value;
            dp[end][start] = value;
            
            for (let i = 0; i < N; i += 1) {
                if (i !== end && i !== start) {
                    recursive(start, i, dp[end][i] + value);
                    recursive(i, end, dp[start][i] + value);
                }
            }
        }
    }
    
    for (const [start, end, value] of road) {
        recursive(start - 1, end - 1, value);
    }
    
    return dp[0].filter(el => el <= K).length;
}