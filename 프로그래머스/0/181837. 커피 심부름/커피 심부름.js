function solution(order) {
    var answer = 0;
    order.map((value) =>{
        if(value.includes('americano') || value.includes('anything')){
            answer += 4500
        } else { 
            answer += 5000
        }
    })
    return answer;
}