function solution(answers) {
    let result = [0,0,0]; // 세 학생의 점수를 담을 배열
    let cnt = [];         // 가장 많이 맞힌 사람 담을 배열
    
    let p1 = [1,2,3,4,5]; // p1 : 1번 학생이 찍는 방식을 담은 배열
    for(let i = 0; i < answers.length; i++){  // 답의 길이만큼 반복문 실행
        if(p1[i % 5] === answers[i]) result[0]++;
        // p1의 길이가 5 이므로 % 5로 나눈 나머지를 계속 반복. 이 과정을 학생마다 실행
    }
    let p2 = [2,1,2,3,2,4,2,5];
        for(let i = 0; i < answers.length; i++){
        if(p2[i % 8] === answers[i]) result[1]++;
    }
    let p3 = [3,3,1,1,2,2,4,4,5,5];
        for(let i = 0; i < answers.length; i++){
        if(p3[i % 10] === answers[i]) result[2]++;
    }
    let max = Math.max.apply(null, result); // 배열의 제일 높은 값을 고르기 
    for(let i = 0; i < result.length; i++){
        if(result[i] === max){ // 제일 높은 값과 result의 값이 같다면 인덱스를 cnt에 넣기
            cnt.push(i+1);
        }
    }
    return cnt;
}