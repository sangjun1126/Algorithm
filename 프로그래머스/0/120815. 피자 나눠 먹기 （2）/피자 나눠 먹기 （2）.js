function solution(n) {
    let pizza = 6;
    let answer = 0;
    while(pizza%n !== 0) {
        pizza+=6
    }
    return answer =pizza/6;
}