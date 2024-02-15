function solution(p) {
    // x의 항과 상수항을 더함
    let [x, c] = p.split('+').reduce(([a,b],s) => {
        if (s.includes('x')) {
            return [a + Number(s.trim().replace('x','') || 1), b];
        }
        return [a, b + Number(s)];
    }, [0, 0]);

    // 둘다 0이라면 0을 반환
    if (!x && !c) return '0';
    // x항이 0이라면 상수항을 문자열로 반환
    if (!x) return c.toString();
    // 이전에 return되지 않았다면 x가 있다는 소리이므로 1이라면 x, n이라면 nx의 값을 x에 입력
    x = `${x==1?'':x}x`;
    // 상수항이 없다면 x 반환
    if (!c) return x;
    // 외에는 x항과 상수항이 모두 있으므로 반환
    return `${x} + ${c}`;
}
