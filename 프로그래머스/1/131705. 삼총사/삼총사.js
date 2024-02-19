function solution(number) {
    var answer = 0;
    var sangjun_list = []
    for (let i = 0; i < number.length; i++) {
        for (let j = i+1; j < number.length; j++) {
            for (let k = j+1; k < number.length; k++) {
                sangjun_list.push(number[i]+number[j]+number[k]);
            }
        }
    }
    answer = sangjun_list.filter(idx => idx == 0).length
    return answer;
}