function solution(phone_number) {
    var answer = '';
    var num_left = phone_number.slice(0, -4);
    var star_ascii = '*'.repeat(num_left.length);
    answer = star_ascii + phone_number.slice(-4); 
    return answer;
}