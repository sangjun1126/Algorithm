function solution(n, k) {
    var answer = 0;
    let sol1 = n * 12000 + k * 2000;
    // console.log(~~(n / 10))
    if (n >= 10) {
        answer = sol1 - (Math.floor(n/10) * 2000);
    } else {
        return sol1;
    }
    // console.log(sol1 - ~~(n/10))
    return answer;
}