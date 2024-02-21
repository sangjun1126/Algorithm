function solution(n, m) {
    let solve_min = 1;
    for (let i = 2; i <= Math.min(n,m); i++) {
        if (n % i == 0 && m % i == 0) {
            solve_min = i;
        }
    }
    const solve_max = n * m / solve_min
    return [solve_min, solve_max];
}