function solution(array, height) {
    var answer = 0;
    let sort_arr = array.sort((a,b) => a-b);
    // console.log(sort_arr)
    for (let i = 0; i < sort_arr.length; i++) {
        if (sort_arr[i] > height) {
            answer += 1
        }
    }
    return answer;
}