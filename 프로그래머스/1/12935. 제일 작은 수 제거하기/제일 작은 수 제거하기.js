function solution(arr) {
    if (arr.length == 1)
        return [-1];
    else {
        const min = Math.min(...arr);
        arr = arr.filter(function(val){
            if (min == val) {
                return false;
            } else {
                return true;
            }
        });
    }
    return arr;
}