function solution(order) {
    var answer = 0;
    let value = order.toString().match(/[369]/g) ?? []
    return value.length;
}

//nullish 연산자