function solution(age) {
    let chr = 'abcdefghij';
    return Array.from(age.toString()).map(v=>chr[v]).join('');
}