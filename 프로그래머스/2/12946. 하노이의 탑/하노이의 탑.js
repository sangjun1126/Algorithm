function solution(n) {
    const answer = []
    function hanoi(depth, from, to, mid) {
      	// 하나의 원판만 있는 경우 시작지점, 도착지점 으로 배열에 값을 넣고 종료
        if(depth === 1) answer.push([from,to])
        else {
          	// 다음 원판은 시작지점 에서 중간 지점으로
            hanoi(depth-1, from, mid, to)
          	// 이동 경로 표시
            answer.push([from, to])
          	// 중간 지점에서 도착 지점으로
            hanoi(depth-1, mid, to, from)
        }
    }
    hanoi(n, 1, 3, 2)
    return answer
}