function solution(my_string, index_list) {
    var answer = '';
    for (let index of index_list) {
        answer += my_string[index];
    }
    return answer;
}