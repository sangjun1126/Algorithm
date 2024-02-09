function solution(my_string) {
    var answer =  Array(52).fill(0)
    const arr = [...my_string]
    arr.map((value) => {
        const char = value.charCodeAt()
        answer[char >= 97 ? char - 71 : char - 65] += 1 
    })
    return answer;
}
