const fs = require('fs')

const getInput = (filePath) => {
    return fs
        .readFileSync(filePath)
        .toString()
        .trim()
        .split(/\n/);
    }

const input = getInput('/dev/stdin'); // 제출시 여기 '/dev/stdin' 으로 변경

let count = Number(input[0]);
let data = new Array();

for(let i = 1; i <= count ; i ++)
{
    let [x,y] = input[i].split(" ").map(Number);
    data.push([x,y]);
}

function compare1(a,b)
{
    if(a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0];
}

data.sort(compare1);

let answer = "";
for(let p of data)
{
    answer += p[0] + " " + p[1] + "\n";
}
console.log(answer);