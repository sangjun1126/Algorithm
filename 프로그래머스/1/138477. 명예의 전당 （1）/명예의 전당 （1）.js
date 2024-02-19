function solution(k, score) {
    var answer = [];
    let list = [];
    for (let i = 0; i < score.length; i++) {
        list.push(score[i]);
        list.sort((a,b) => b-a);
        if (list.length > k) {
            list.pop();
        }
        answer.push(list[list.length - 1])
    }
    return answer;
}