const input = require("fs")
  .readFileSync("dev/stdin")
  .toString().trim()
  .split("\n");
const [hang, yul] = input
  .shift()
  .split(" ")
  .map((i) => +i);
const a = [];
const result = [];

input.forEach((line) => {
  const lineArr = line.split(" ").map((i) => +i);
  a.push(lineArr);
});

const b = a.splice(hang, hang);

for (let i = 0; i < hang; i++) {
  const smallA = a[i];
  const smallB = b[i];
  const arr = [];
  for (let j = 0; j < yul; j++) {
    const f = smallA[j] + smallB[j];
    arr.push(f);
  }
  result.push(arr);
}

result.map((i) => console.log(i.join(" ")));