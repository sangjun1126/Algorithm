function solution(s, n) {
    var answer = '';
    let alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/\w/)) {
            const index = alpha.indexOf(s[i]);
            answer += alpha[index + n];
            continue;                 
        }
        answer += s[i]
    }
    return answer;
}