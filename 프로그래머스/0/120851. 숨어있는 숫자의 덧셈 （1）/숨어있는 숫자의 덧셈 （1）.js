function solution(my_string) {
    var answer = 0;
my_string.split('').map(e =>!isNaN(e)? 
answer += Number(e) : 0)
    return answer;
}