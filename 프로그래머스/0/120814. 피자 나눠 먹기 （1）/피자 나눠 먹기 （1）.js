function solution(n) {
   if (n / 7 == ~~(n / 7)){
       return n / 7;
   }
    return ~~(n / 7) + 1;
}