function solution(arr) {
    answer = [0, 0];
		//쿼드 압축 함수 
    function SanE(x, y, r) {
			// 만약 길이가 1이면 쿼드 압축 종료 
      if (r === 1) return answer[arr[x][y]]++;
      let flag = true;
			// 분할한 부분의 원소가 전부 같은지 확인
      for (let i = x; i < x + r; i++) {
        for (let j = y; j < y + r; j++) {
          if (arr[i][j] !== arr[x][y]) {
            flag = false;
            break;
          }
        }
      }
			// 만약 원소가 모두 같거나 r이 1이면 answer 에 값 입력 
      if (flag) return answer[arr[x][y]]++;

			// flag가 false 이면 분할 진행 
      r /= 2;

			// 재귀를 이용하여 십자가로 자른 나머지 부분도 계산 
      SanE(x, y, r);
      SanE(x + r, y, r);
      SanE(x, y + r, r);
      SanE(x + r, y + r, r);
    }
    SanE(0,0,arr.length);
    return answer;
}