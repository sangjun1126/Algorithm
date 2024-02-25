const fs = require('fs'); //dev/stdin
let input =fs.readFileSync('dev/stdin').toString().trim().split('\n');

const testCaseNum = +input[0]
const testCases = input.slice(1)


function solution(testCaseNum, testCases){
    let result = 0
    for(let i=0; i<testCaseNum; i++){
        let check = []
        const testCase = testCases[i].trim()
        for(let j=0; j<testCase.length; j++){
            if(check.indexOf(testCase[j]) === -1){
                check.push(testCase[j])
            } else {
                if(check.indexOf(testCase[j]) !== check.length-1){
                    result += 1
                    break
                }
            }
        }
    }
    console.log(testCaseNum - result)
}

solution(testCaseNum, testCases)