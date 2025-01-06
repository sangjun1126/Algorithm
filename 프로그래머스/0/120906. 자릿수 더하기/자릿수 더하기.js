function solution(n) {
    var answer = 0;
    let sp_n = n.toString().split('')
    // console.log(sp_n)
    for (let i = 0; i < sp_n.length; i++) {
        answer += Number(sp_n[i])
    }
    return answer;
}