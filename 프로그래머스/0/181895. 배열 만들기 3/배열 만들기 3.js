function solution(arr, intervals) {
    const [start1, end1] = intervals[0];
    const [start2, end2] = intervals[1];
    
    const result = arr.slice(start1, end1 + 1).concat(arr.slice(start2, end2 + 1));
    
    return result;
}