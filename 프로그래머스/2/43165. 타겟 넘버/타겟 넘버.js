function solution(numbers, target) {
    var answer = 0;
    const len = numbers.length;
    
    function dfs(count, sum) {
        if (count === len) {
            if (target === sum) {
                answer += 1;
            }
            return;
        }
        
        dfs(count + 1, sum + numbers[count]);
        dfs(count + 1, sum - numbers[count]);
    }
    
    dfs(0,0);
    return answer;
}