function solution(array, height) {
    var answer = 0;
    return array.filter(v => v >height).length
}