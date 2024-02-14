function solution(n) {
    var answer = [];
    let index = 1;
while (index <= n) {
    if (n%index == 0) {
        answer.push(index);
}
index += 1;
}
    return answer;
}