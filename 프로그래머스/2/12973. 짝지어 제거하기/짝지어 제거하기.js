function solution(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i+1]){
            i++
        } else {
            stack.push(s[i]);
            if (stack[stack.length - 1] === stack[stack.length - 2]) {
                stack.splice(stack.length-2,2)
            }
        } 
    }
    return stack.length === 0 ? 1 : 0;
}