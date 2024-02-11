function solution(num_list) {
    var answer = [];
    num_list = num_list.sort((a,b) => a-b);
    let cond = true;
    if (cond){
        return num_list.slice(num_list, 5)
    }
    return answer;
}