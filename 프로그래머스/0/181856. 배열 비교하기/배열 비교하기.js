function solution(arr1, arr2) {
    var answer = 0;
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i <arr1.length; i++) {
        sum1 += arr1[i]
    } for (let j = 0; j<arr2.length; j++) {
        sum2 += arr2[j]
    } if (arr1.length !== arr2.length) {
        if (arr1.length > arr2.length) {
            answer = 1;
        } else {
            answer = -1;
        }
    } else if (arr1.length === arr2.length) {
        if (sum1 > sum2) {
            answer = 1;
        } else if (sum1 < sum2) {
            answer = -1;
        } else {
            answer = 0;
        }
    }
    return answer;
}