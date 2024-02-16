function solution(emergency) {
    let 응급순서 = emergency.slice().sort((a,b) => b-a)
return emergency.map (v => 응급순서.indexOf(v) + 1);
    return answer;
}