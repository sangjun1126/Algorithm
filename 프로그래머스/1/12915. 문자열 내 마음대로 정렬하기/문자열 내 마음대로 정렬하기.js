function solution(strings, n) {
    var answer = [];
    for (let i = 0; i< strings.length; i++) {
        let solve = strings[i][n]
        strings[i] = solve + strings[i]
    }
    strings.sort();
    for (let j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"")
        answer.push(strings[j])
    }
    return answer;
}