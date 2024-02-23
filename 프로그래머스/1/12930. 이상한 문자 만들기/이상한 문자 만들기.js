function solution(s) {
    var answer = '';
    var x = s.split(' ');
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            if (j % 2 == 0) {
                answer += x[i][j].toUpperCase();
            } else {
                answer += x[i][j].toLowerCase();
            }
        }
        if (i < x.length -1) {
            answer += ' ';
        }
    }
    return answer;
}