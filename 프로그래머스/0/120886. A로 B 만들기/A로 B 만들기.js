function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1:0;
}

// array해서 정렬하면 같은가