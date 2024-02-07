function solution(a, b) {
    const atob = String(a) + String(b);
    const btoa = String(b) + String(a);
    
    return atob >= btoa ? Number(atob) : Number(btoa)
}

// 정수가 조건 - parseInt, Math.Floor는 쓸 필요 없음
// let으로 조건 생성, if로 a와 b를 비교하기
// 붙이는 개념 조건.concat(붙일거, 붙일거)