const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = input.shift();

// 가입 순서를 판단하기 위해 input의 인덱스를 원소값에 추가해줌
for(let i = 0; i < iter; i++){
    // 문자열 + 숫자 = 문자열
    input[i] += " " + i;
}

let arr = [];

for(let i = 0; i < iter; i++){
    arr.push(input[i].split(" "));
}

arr.sort((a,b) => {
    if(a[0] === b[0]){
        return a[2] - b[2]
    } else {
        return a[0] - b[0]
    }
})

let ans = [];

// 가입 순서를 판단하기 위한 인덱스값 원소 삭제
// 배열 맨 뒤에 존재하므로 pop으로 제거
for(let i = 0; i < iter; i++){
    arr[i].pop();
    // 나이와 이름을 join(" ")으로 연결해서 하나의 문자열로 만든 뒤 ans 배열에 push
    ans.push(arr[i].join(" "));
}

console.log(ans.join("\n"));