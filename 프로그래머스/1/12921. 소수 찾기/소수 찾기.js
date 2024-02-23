function primeCheck(k){
    if(k === 2) return true; 			// 2는 소수이다.
    if(k % 2 === 0) return false;		// 2의 배수는 소수가 아니다.
    if(k === 3) return true;			// 3은 소수이다.
    for(let i = 3; i*i <= k; i += 2){	// 3의 배수는 소수가 아니다.
        if(k % i === 0) return false;	// k의 제곱근까지만 판정
    }
    return true;
}

function solution(n) {					
    let answer = 0;
    for(let j = 2; j <=n; j++){			// n까지 돌며 j가 소수이면
        if(primeCheck(j)) answer++;		// answer++
    }
    return answer;						
}