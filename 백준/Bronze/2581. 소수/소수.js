const readFileSyncAddress = '/dev/stdin';

const fs = require('fs');
let [m, n] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g)
  .map((v) => +v);

const isPrime = function (x) {
  if (x === 1) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
};

const solution = function (m, n) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = m; i <= n; i++) {
    if (i === 2 || (i % 2 !== 0 && isPrime(i))) {
      min = Math.min(i, min);
      sum += i;
    }
  }
  let answer = sum > 0 ? `${sum}\n${min}` : -1;
  return answer;
};

console.log(solution(m, n));