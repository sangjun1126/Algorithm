function solution(n, k) {
    // k진수로 변환해서 0으로 구분
    let result = []
    while(n > 0){
        result.unshift(n % k);
        n = Math.floor(n / k);
    }
    const convertedNums = result.join("").split('0');
    
    // 구분된 숫자를 소수인지 확인해서 맞으면 count에 +1
    let count = 0;
    for(let i = 0; i < convertedNums.length; i++){
        const num = Number(convertedNums[i]);
        if(convertedNums[i] === '') continue;
        if(isPrime(num)) count++;
    }
    return count;
}

const isPrime = (num) => {
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}