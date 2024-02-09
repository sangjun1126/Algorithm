function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.map((value) => {
        const res = [...value]
        const slicedText = res.slice(s, s+l)
        const converted = Number(slicedText.join(''))
        if(converted > k) {
            answer.push(converted)
        }
    })
    return answer;
}