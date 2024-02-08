function solution(num_list) {
    var answer = 0;
    let cond = num_list.reduce((a,b)=>a*b);
    let cond2 = num_list.reduce((a,b)=>a+b)**2;
answer = cond < cond2 ? 1 : 0;
    return answer;
}