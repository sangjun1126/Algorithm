const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    const initStr = input[0];
    const splitStr = input[0].split('');
    const reversedStr = splitStr.reverse().join('');
    
    reversedStr === initStr ? console.log(1) : console.log(0)
}) 