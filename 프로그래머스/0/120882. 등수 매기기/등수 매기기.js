function solution(score) {
    let 총합 = score.map (v => v[0] + v[1])
    let 정렬된배열 = 총합.slice().sort((a, b) => b-a)
    return 총합.map((v) => 정렬된배열.indexOf(v) + 1);
}