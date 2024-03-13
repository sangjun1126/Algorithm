function solution(n, t, m, p) {
    var answer = '';
    var arr = "";
    let start = 0;
    
    while(arr.length <= t*m) {
        arr += start.toString(n);
        start ++;
    }
    
    for (let i = p -1; i <= t*m - 1; i += m) {
        answer += arr[i].toUpperCase();
    }
    return answer;
}