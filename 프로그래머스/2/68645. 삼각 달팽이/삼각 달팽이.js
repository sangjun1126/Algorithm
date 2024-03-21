function solution(n) {
  // 아래 오른쪽 왼쪽위 대각선 순서
  let map = Array.from(new Array(n), () => new Array(n).fill(0));
  let dy = [1, 0, -1];
  let dx = [0, 1, -1];
  const maxNum = (n * (n + 1)) / 2;

  let temp = 0;
  let cnt = 1;
  map[0][0] = cnt;
  const queue = [[0, 0]];

  while (cnt < maxNum) {
    let [cy, cx] = queue.shift();
    cnt++;

    const ny = cy + dy[temp % 3];
    const nx = cx + dx[temp % 3];

    if (ny >= 0 && nx >= 0 && ny < n && nx < n && map[ny][nx] === 0) {
      queue.push([ny, nx]);
      map[ny][nx] = cnt;
    } else {
      // 이전으로 돌아가기
      const fy = ny - dy[temp % 3];
      const fx = nx - dx[temp % 3];
      queue.push([fy, fx]);
      temp++;
      cnt--;
    }
  }

  const answer = [];
  map.forEach((row) => {
    row.forEach((col) => {
      if (col !== 0) answer.push(col);
    });
  });

  console.log(answer);
  return answer;
}