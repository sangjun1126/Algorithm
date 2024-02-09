function solution(my_strings, parts) {
    var answer = [];
    
    for (let i = 0; i < my_strings.length; i++) {
        const [start,end] = parts[i];
        const part = my_strings[i].substring(start, end + 1)
        answer.push(part)
    }
    return answer.join('');
}