function solution(myString) {
    var answer =0;
    return [...myString.replaceAll('a', 'A')].map(a => (a.charCodeAt() > 65 && a.charCodeAt() < 97) ? a.toLowerCase() : a).join("")
    return answer;
}
// 문제 = a를 대문자 A로 변환 (toUpperCase(a))
// mystring 배열 순회 - for문 / 대문자 a를 포함하냐의 조건 = if문
// 1안 대문자 변환에 오류가 뜸
