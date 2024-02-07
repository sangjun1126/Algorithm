//같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
//같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
//모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if (a === b && b === c && c === a) {
    console.log(10000 + (a * 1000))
} else if (a !== b && b !== c && c !== a) {
    if (a > b && a > c) {
        console.log(a * 100)
    } else if (b > a && b > c) {
        console.log(b * 100)
    } else {
        console.log(c * 100)
    }
} else {
    if (a === b && a !== c) {
        console.log(1000 + (a * 100) )
    } else if (b === c && b !== a) {
        console.log(1000 + (b * 100))
    } else if (c === a && c !== b) {
        console.log(1000 + (c * 100))
    }
}