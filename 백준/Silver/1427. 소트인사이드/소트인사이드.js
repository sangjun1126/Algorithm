const input = (filePath) => {
    return require('fs').readFileSync(filePath).toString().trim().split('/\n/');
}

const input_2 = input('dev/stdin');

let data = input_2[0].split("").map(Number);

data.sort(function(a,b) {
    return b-a;
});

let answer = "";

for (let i of data) {
    answer += i;
}
console.log(answer)