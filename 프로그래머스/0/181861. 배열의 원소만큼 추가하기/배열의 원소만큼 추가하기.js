function solution(arr) {
    var answer = [];
    let result = arr.map(num => Array(num).fill(num)).flat();
    answer = result
    return answer;
}