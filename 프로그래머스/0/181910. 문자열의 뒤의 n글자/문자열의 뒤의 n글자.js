function solution(my_string, n) {
    var answer = '';
    // string.substring(start, end) / substring으로 문자열 자르기 - 이건 앞의 n자가 나옴
    // str.slice (start,end) / slice구문으로 풀어보가
    answer = my_string.slice(my_string.length-n,my_string.length);
    return answer;
}