function solution(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0);
        }
        arr.push(row);
    }
    return arr;
}