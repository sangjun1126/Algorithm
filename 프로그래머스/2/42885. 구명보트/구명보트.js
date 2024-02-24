function solution(people, limit) {
  var answer = 0;
   people.sort((a, b) => {
    return a - b;
  });
  while (people.length > 0) {
    const p = people.pop(); // 맨뒤의 값 제거
    let w = limit - p; // 제한된 무게에세 제일 무거운 사람을 뺴기
    if (people[0] <= w) {
      people.splice(0, 1); //만약 뺀후 몸무게가 제일 낮은사람의 몸무게보다 높을때 배열내 작은 몸무게 제거
    }
    answer++;
  }
  return answer;
}