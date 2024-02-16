function solution(n) {
    var answer = 0;
     let index = 1;
    let count = 0;
    while (index <= n) {
        if (n % index == 0) {
            //console.log(index)
            count++
        }
        index += 1
    }
    return answer = count;
}