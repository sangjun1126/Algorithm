function solution(numbers) {
    var answer = 0;
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
    sum += numbers[i]
    }
    return answer = sum / numbers.length;
}