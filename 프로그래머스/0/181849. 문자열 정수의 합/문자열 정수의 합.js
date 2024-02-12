function solution(num_str) {
    var answer = 0;
    let num = num_str.split("");
    let a = num.map(x => Number(x));
    console.log(a);
    return answer = a.reduce((e,b) => e+b);
}