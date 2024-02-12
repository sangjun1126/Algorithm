function solution(arr, k) {
    var answer = [];
    let i = arr.map(function(element){
        return element *k
    });
    let j = arr.map(function(element){
        return element +k
    });
    if(k%2 ==1){
        answer = i;
    }else{
        answer = j;
    }
    return answer ;
}
