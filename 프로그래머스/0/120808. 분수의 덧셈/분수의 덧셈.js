function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let a = numer1 * denom2 + numer2 * denom1
    let b = denom1 * denom2
    let maximum = 1
    
    for (let i = 1; i <= a; i++) {
        if(a%i === 0 && b%i === 0) {
            maximum = i
        }
    }
    return [a / maximum, b / maximum]

}