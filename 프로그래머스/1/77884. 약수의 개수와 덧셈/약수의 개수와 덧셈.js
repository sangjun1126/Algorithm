function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        var result = 0;
        for (let index = 1; index <= i; index++) {
            if (i % index == 0) {
                result ++
            }
        }
        if (result % 2 ==0) {
            answer += i
        } else {
            answer -= i
        }
    }
    return answer;
}