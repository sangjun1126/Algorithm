function solution(strArr) {
  // 필터링 조건에 맞는 문자열을 남기고 필터링된 배열을 반환합니다.
  return strArr.filter(str => !str.includes("ad"));
}