function solution(s, skip, index) {
    let answer = '';
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'].filter(v => ![...skip].includes(v));
    let sArr = [...s];
    for(let i = 0; i < sArr.length; i++){
        let idx = alphabet.indexOf(sArr[i]);
        const newIdx = (id) => {
            return id > alphabet.length - 1 ? newIdx(id - alphabet.length) : id;
        }
        answer += alphabet[newIdx(idx+index)];
    }
    return answer;
}