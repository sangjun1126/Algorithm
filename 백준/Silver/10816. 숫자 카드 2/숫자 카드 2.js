// 첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.
// 셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'ans.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");
let N = input[0], N_cards = input[1].split(" "), M = input[2], M_cards = input[3].split(" ");
let ansObj = new Object();
const ans = new Array();
for(let i = 0; i < N; i++){
    N_cards[i] = parseInt(N_cards[i])
    ansObj[N_cards[i]] ? ansObj[N_cards[i]]++ : ansObj[N_cards[i]] = 1;
}

for(let i = 0; i < M; i++){
    M_cards[i] = parseInt(M_cards[i]);
    ansObj[M_cards[i]] ? ans.push(ansObj[M_cards[i]]): ans.push(0);
}


console.log(ans.join(" "))