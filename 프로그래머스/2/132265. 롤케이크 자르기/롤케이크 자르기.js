function solution(topping) {
    var answer = 0;
    const all = new Map();
    const bro = new Map();
    
    topping.forEach((n) => {
        all.set(n, (all.get(n) || 0) + 1);
    });
    
    for (let n of topping) {
        all.set(n, all.get(n) - 1);
        bro.set(n, true);
        
        if (!all.get(n)) all.delete(n);
        if (all.size === bro.size) answer += 1;
        if (all.size < bro.size) break;
    }
    
    return answer;
}