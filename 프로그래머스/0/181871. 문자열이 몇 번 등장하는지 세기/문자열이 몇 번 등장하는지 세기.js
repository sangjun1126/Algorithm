function solution(myString, pat) {
    var answer = 0;
    for (let i = 0; i < myString.length; i++) {
        if (myString.startsWith(pat, i)) {
            answer += 1;
        }
    }
    return answer;
}