function solution(numbers) {

    let answer = [];

    for(let i = 0; i < numbers.length; i++) {

        let n = '0' + numbers[i].toString(2);

        if(n[n.length-1] === '0') n = n.slice(1,-1) + '1';

        else {
            for(let j = n.length; j >= 0; j--) {
                if(n[j] === '0') {
                    n = n.slice(0,j) + '10' + n.slice(j+2);
                    break;
                }
            }
        }
        answer.push(parseInt(n,2));
    }

    return answer;
}