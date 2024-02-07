function solution(a, b, flag) {
    var answer = 0;
    if(flag==true){
        return a+b;
    }else if(flag==false){
        return a-b;
    }
    return answer;
}