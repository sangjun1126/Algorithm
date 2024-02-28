function solution(s) {
  return s
    .substring(2, s.length - 2)
    .split("},{")
    .map((e) => e.split(",").map((e) => parseInt(e)))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur) => [...acc, ...cur.filter((it) => !acc.includes(it))], []);
}