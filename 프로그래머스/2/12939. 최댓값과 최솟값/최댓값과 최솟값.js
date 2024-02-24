function solution(s) {
    var answer = '';
    let arr = s.split(' ').map((sangjun) => parseInt(sangjun));
    console.log("1번 출력식:",arr)
    let max = Math.max(...arr);
    console.log("2번 출력식:",max)
    let min = Math.min(...arr);
    console.log("3번 출력식:",min)
    answer = [min,max].join(' ')
    return answer;
}