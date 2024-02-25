const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const ballCount = Number(input.shift())

// Max의 값을 0으로 설정하면, 음수의 좌표가 입력되었을 때 정상적인 답이 도출되지 않음
let minX = Number.MAX_SAFE_INTEGER
let maxX = Number.MIN_SAFE_INTEGER
let minY = Number.MAX_SAFE_INTEGER
let maxY = Number.MIN_SAFE_INTEGER

// x, y 좌표의 최댓값이 원하는 사각형이 넓이임
input.forEach(line => {
    const [x, y] = line.split(" ").map(a => Number(a))

    if(x < minX) minX = x
    if(x > maxX) maxX = x
    if(y < minY) minY = y
    if(y > maxY) maxY = y
})

const width = maxX - minX
const height = maxY - minY

const squareArea = width * height

console.log(squareArea)