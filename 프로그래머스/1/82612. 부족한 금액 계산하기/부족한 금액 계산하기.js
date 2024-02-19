function solution(price, money, count) {
    var answer = 0;
    var mul_sangjun = 0;
    for (let i = 1; i <= count; i++) {
        mul_sangjun += price*i
    }
    if (mul_sangjun > money) {
        answer = mul_sangjun - money;
    } else {
        answer = 0
    }
    return answer;
}