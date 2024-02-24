function solution(n) {
  var answer = 0;

  while (n > 0) {
    if (n % 2 !== 0) {  //순간이동이 2배씩 증가하므로 도중에 홀수가 나올때 다시 짝수로 맞춰줌
      n = n - 1; 
      answer = answer + 1;
    } else {
      n = n / 2;
    }
  }
  return answer;
}