const solution = (n) => {
    const dp = new Array(n+1).fill(0);
    console.log("새로운 배열 채우기 : ", dp)
    dp[0] = dp[1] = 1;
    console.log("0번째 1번째가 1로 채워졌나요? :", dp)
    
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j-1] * dp[i-j];
            console.log("반복문 순회가 이루어지나요? :" , dp[i])
        }
    }
    
    return dp[n]
}