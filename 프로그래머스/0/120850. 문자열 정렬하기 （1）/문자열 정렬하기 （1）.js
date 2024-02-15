function solution(my_string) {
    var answer = [];
 return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}