function solution(n, m, section) {
let paint = 0; //paint=0 라는 변수 값을 지정하고 (paint 말고도 아무거나 가능하다)
let start = section[0]; // 시작을 section[0]으로 지정했다
for (let i=1; i<=n; i++){ // for 반복문을 이용해 1로 시작해서 n값보다 작은 i값 설정
if (section[i] - start >= m){ // if 조건을 이용해 (section[i]-시작이) (롤러의 길이)보다 크거나 같을 경우
    paint++; // 우리는 paint에 증가연산자를 쓰고 시작 역시 section[i]로 변경한다는 실행문 설정
    start = section[i];
}
}
    return paint + 1; // 마지막 section역시 포함시켜야 하니 return 추가 설정
}

// n은 벽의 총 개수, m은 한 번의 페인트 칠로 칠할 수 있는 벽의 개수, section = [벽에 칠해야 하는 배열]
// 최소한의 페인트 칠로 section을 칠해야 할 때, 몇 번의 페인트 칠로 해야하는가?
// for문을 이용해 section arr 1차 해결 / if값을 만족한다면 paint변수 증가 + start를 section[i]로 설정
// 마지막 section까지 세기 위해 paint + 1 설정
// while문이나 for each문으로도 해결이 가능할 듯