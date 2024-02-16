function solution(hp) {
    var answer = 0;
    let first = ~~(hp/5);
    let second = ~~((hp-first*5)/3);
    let third = hp - first*5 - second*3;
    return first + second + third;
}