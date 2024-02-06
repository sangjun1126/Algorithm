const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.on('line', line => {
 let arr = line.split(" ");
 let a = parseInt(arr[0]);
 let b = parseInt(arr[1]);
 console.log(a+b);
});

rl.on('line', line => {
 let arr = line.split(" ");
 let a = parseInt(arr[0]);
 let b = parseInt(arr[1]);
 console.log(a-b);
});

rl.on('line', line => {
 let arr = line.split(" ");
 let a = parseInt(arr[0]);
 let b = parseInt(arr[1]);
 console.log(a*b);
});

rl.on('line', line => {
 let arr = line.split(" ");
 let a = parseInt(arr[0]);
 let b = parseInt(arr[1]);
 console.log(~~(a/b));
});

rl.on('line', line => {
 let arr = line.split(" ");
 let a = parseInt(arr[0]);
 let b = parseInt(arr[1]);
 console.log(a%b);
});
