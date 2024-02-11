function solution(arr, flag) {
    var answer = [];
    for(let i =0 ;i < flag.length; i++){
        const len = flag[i] ? arr[i] * 2 : arr[i]
        for(let j =0; j < len ; j ++) {
           if(flag[i]){
              answer.push(arr[i])
           }else {
              answer.pop()
           }
          
       }
    }
    return answer;
}