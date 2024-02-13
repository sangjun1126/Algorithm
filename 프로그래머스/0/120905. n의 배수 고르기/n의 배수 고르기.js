function solution(n, numlist) {
    var answer = [];
    let els = numlist.filter((el) => el % n === 0);
  return els;
}