function solution(sequence, k) {
  // 두 인덱스 사이에 답이 있기에 기본 값으로 0 부터 끝인 1,000,000으로 세팅
  const answer = [0, 1000000];

  // left, right를 0으로 세팅
  let [left, right] = [0, 0];
  
  // sum에 첫 번째 값을 넣어준다.
  let sum = sequence[0];

  // right가 sequence의 길이보다 작으면 계속 루프를 돈다.
  while (right < sequence.length) {
    if (sum === k) {
      // sum이 k와 같아지면
      // 현재 답에 구해진 인덱스 사이의 길이와 새로 들어온 길이를 비교해
      // 더 짧은 길이를 넣어준다.
      if (answer[1] - answer[0] > right - left) {
        answer[0] = left;
        answer[1] = right;
      }
      // 그 후 left와 right 값을 하나씩 올려주며 처리해준다.
      sum -= sequence[left++];
      sum += sequence[++right];
    }

    // sum이 k보다 크면 sum에서 현재 left 인덱스에 해당하는 값을 빼고 left 증가
    else if (sum > k) sum -= sequence[left++];
    // sum이 k보다 작으면 right값을 증가 시키고 right 인덱스에 해당하는 값을 더해준다.
    else if (sum < k) sum += sequence[++right];
  }

  return answer;
}
