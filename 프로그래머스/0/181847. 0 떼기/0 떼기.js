function solution(n_str) {
    var index = 0;
    while(index < n_str.length && n_str[index] === '0') {
        index ++
    }
    return n_str.substring(index);
}