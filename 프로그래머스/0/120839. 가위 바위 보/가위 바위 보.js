function solution(rsp) {
    var answer = '';
    let sp_rsp = rsp.split('');
    for (let i = 0; i < sp_rsp.length; i++) {
        if (sp_rsp[i] === "2") {
            answer += "0"
        } else if (sp_rsp[i] === "0") {
            answer += "5"
        } else {
            answer += "2"
        }
    }
    return answer;
}