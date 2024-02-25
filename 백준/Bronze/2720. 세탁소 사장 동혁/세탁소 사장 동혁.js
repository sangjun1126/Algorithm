const filePath = process.platform == 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

for (let i = 1; i < input.length; i++) {
  console.log(solution(input[i]));
}

function solution(change) {
  let count = [0, 0, 0, 0];
  const coins = [25, 10, 5, 1];
  for (let i = 0; i < coins.length; i++) {
    count[i] += Math.floor(change / coins[i]);
    change %= coins[i];
  }
  return count.join(' ');
}
