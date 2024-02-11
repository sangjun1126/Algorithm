function solution(numbers, n) {
    var answer = 0;
    let sum = 0;
    for (let i = 0; i<numbers.length; i++){
    sum += numbers[i];
        if(sum > n){
         answer = sum;
            break;
        }
    }
return answer;
}
// 앞에서 부터 자동으로 더함 = sort 미 사용
// for문으로 i의 증가 > if 문으로 numbers가 n보다 커질경우 중지