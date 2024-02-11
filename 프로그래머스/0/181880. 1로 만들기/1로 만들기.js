function solution(num_list) {
    var answer = 0;
    for(let i =0; i< num_list.length; i ++){
        let res = num_list[i]
        
        while(res !== 1){
            if(res % 2===0 ){
                res = res / 2
                answer += 1
            } else {
                res = (res - 1) / 2
                answer += 1
            }
        }
    }
    return answer;
}
