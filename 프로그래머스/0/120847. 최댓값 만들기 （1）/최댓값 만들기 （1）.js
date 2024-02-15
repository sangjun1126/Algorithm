function solution(numbers) {
    var answer = 0;
    var arr = numbers.sort((a, b) => b - a)
    console.log(arr);
    return numbers[0]*numbers[1];
}