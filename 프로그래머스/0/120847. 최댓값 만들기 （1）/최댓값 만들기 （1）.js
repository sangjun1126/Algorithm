function solution(numbers) {
    var answer = 0;
    let sorted_arr = numbers.sort((a,b) => a-b);
    // console.log(sorted_arr)
    // console.log(sorted_arr[sorted_arr.length]) == undefined
    // console.log(sorted_arr.lengt-1h)
    // console.log(sorted_arr[sorted_arr.length-1])
    answer = sorted_arr[sorted_arr.length -1] * sorted_arr[sorted_arr.length -2]
    return answer;
}