function solution(survey, choices) {
    let MBTI = {};
    let types = ['RT', 'CF', 'JM', 'AN'];
    
    // 성격 객체 생성
    types.forEach((type) => {
        [...type].forEach((t) => MBTI[t] = 0); // value까지 같이 부여해야 만들어짐
    });
    
    choices.forEach((choice, i) => {
        const [disagree, agree] = survey[i]; // 문자열을 배열 디스트럭쳐링으로 분리

        // choice <= 4 ? MBTI[disagree] += Math.abs(choice - 4) : MBTI[agree] += Math.abs(choice - 4); 
        MBTI[choice <= 4 ? disagree : agree] += Math.abs(choice - 4); // 위 라인 리팩토링
    });
    
    // map으로 꺼낼 때 배열 디스트럭쳐링 사용
    return types.map(([a, b]) => MBTI[a] < MBTI[b] ? b : a).join('');
}