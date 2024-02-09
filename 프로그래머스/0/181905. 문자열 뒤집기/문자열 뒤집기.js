function solution(my_string, s, e) {
    var answer = my_string.slice(0, s); // s 이전 부분을 그대로 복사
    var reversed = my_string.slice(s, e + 1).split('').reverse().join(''); // s부터 e까지의 부분 문자열을 뒤집음
    answer += reversed; // 뒤집은 부분 문자열을 이어붙임
    answer += my_string.slice(e + 1); // e 이후 부분을 그대로 복사
    return answer;
}