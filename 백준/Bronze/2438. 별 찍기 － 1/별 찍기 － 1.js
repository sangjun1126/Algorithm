const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
  
rl.on('line', line => {
  const N = line;
  let answer = '';

 for (var i = 1; i <= N ; i++) {
   answer += `*`;
   console.log(answer);
 }

})