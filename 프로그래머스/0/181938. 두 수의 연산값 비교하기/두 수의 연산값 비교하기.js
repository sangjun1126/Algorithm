function solution(a, b) {
    const abConcat = parseInt(a.toString() + b.toString()); // a ⊕ b 계산
    const doubleAb = 2 * a * b; // 2 * a * b 계산
    
    if (abConcat >= doubleAb) {
        return abConcat;
    } else {
        return doubleAb;
    }
}