function solution(s){
    var answer = 0;
    return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}