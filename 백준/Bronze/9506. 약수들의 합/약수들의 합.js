//어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다.
//예를 들어 6은 6 = 1 + 2 + 3 으로 완전수이다.
//n이 완전수인지 아닌지 판단해주는 프로그램을 작성하라.

const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

for (let i = 0; i < input.length - 1; i++) {
    const num = input[i];
    let sum = 0;
    const arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
            arr.push(i)
        }
    }
    
    if (sum == num) {
		console.log(`${num} = ${arr.join(' + ')}`);
	} else {
		console.log(`${num} is NOT perfect.`);
	}
}