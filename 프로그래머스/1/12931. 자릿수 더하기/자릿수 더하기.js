function solution(n){
    var answer = 0;
    let m = String(n);
    for (let i = 0; i < m.length; i ++) {
        answer += parseInt(m[i]);
    }
    return answer;
}

// string 변환이 첫번째
// for문을 이용하여 i를 지정
// parseInt를 사용