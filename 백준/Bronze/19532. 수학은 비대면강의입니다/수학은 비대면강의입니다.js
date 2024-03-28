const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  const [a, b, c, d, e, f] = input[0];

  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        console.log(x + ' ' + y);
      }
    }
  }
});
