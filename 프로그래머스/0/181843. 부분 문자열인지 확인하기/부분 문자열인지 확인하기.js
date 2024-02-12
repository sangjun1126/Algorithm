function solution(my_string, target) {
    var answer = 0;
    my_string = my_string.toLowerCase();
    target= target.toLowerCase();
    if (my_string.includes(target)){
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}