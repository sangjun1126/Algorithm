function solution(num, total) {
    const min = Math.ceil(total / num - Math.floor(num / 2));

  // Array.from() 메서드를 이용해 구해둔 초기값 부터
  // num의 길이 만큼 해서 답을 구한다.
  return Array.from({ length: num }, (_, i) => i + min);
}