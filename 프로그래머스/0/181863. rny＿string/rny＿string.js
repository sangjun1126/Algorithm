function solution(rny_string) {
    var answer = '';
    if (rny_string.includes('m')){
        answer = rny_string.replaceAll('m', 'rn');
    } else {
        answer = rny_string;
    }
    return answer;
}