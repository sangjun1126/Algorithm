function solution(sticker) {
    
    // 동적 계획을 위해 기존 길이에 2를 더한 길이를 생성
    const len = sticker.length+2
    // 첫 스티커를 땐 경우
    const arr1 = Array(len).fill(0)
    // 두 번째 스티커부터 땐 경우
    const arr2 = Array(len).fill(0)
    
    if(sticker.length === 1) return sticker[0]
    
    // 2번째 인덱스가 0번째 인덱스 취급, 첫 스티커를 땠다면 원형 연결된 구조 상 마지막 스티커를 땔 수 없으므로 len-1
    for(let i = 2 ; i < len-1 ; i ++) {
        // 이번 스티커를 땔 차례의 경우 이 전 스티커를 땠다면 이번에 땔 수 없으므로 숫자 동일, 아니라면 이 전 까지의 총합 + 이번 스티커의 값 ( 2부터 시작했으므로 -2가 해당번째의 숫자 )
        arr1[i] = Math.max(arr1[i-1], arr1[i-2]+sticker[i-2])
    }
    for(let i = 3 ; i < len ; i ++) {
        arr2[i] = Math.max(arr2[i-1], arr2[i-2]+sticker[i-2])
    }
    
    // arr1은 마지막 스티커를 때지 못하므로 길이에 -2를 한 값이 최종 합
    return Math.max(arr1[arr1.length-2], arr2[arr2.length-1])
}