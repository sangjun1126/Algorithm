// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output :process.stdout});

rl.on('line', line => {
    let arr = line.split(" ");
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
    let c = parseInt(arr[2]);
    console.log((a+b)%c);
    console.log(((a%c)+(b%c))%c);
    console.log((a*b)%c);
    console.log(((a%c)*(b%c))%c)
})
