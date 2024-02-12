function solution(arr, delete_list) {
    let result = arr.filter(sangjun => !delete_list.includes(sangjun));
    return result;
}