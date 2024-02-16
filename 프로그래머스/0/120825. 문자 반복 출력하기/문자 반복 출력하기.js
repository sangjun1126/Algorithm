function solution(my_string, n) {
    var answer = 0;
    return answer =[...my_string].map(v =>v.repeat(n)).join("");
}