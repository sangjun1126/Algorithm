function solution(queue1, queue2) {
    var answer = -1;
    let maxMove = queue1.length + queue2.length;
    let curtMove = 0;
    let count1 = 0;
    let count2 = 0;
    
    for ( let q of queue1) {
        count1 += q;
    }
    for (let q of queue2) {
        count2 += q;
    }
    const target = (count1 + count2)/2
    if((count1 + count2)%2 || (queue1.length + queue2.length) %2) return -1;
    
    let queue1_idx = 0;
    let queue2_idx = 0;

    while(curtMove < maxMove +5){
        if(count1 == target) {
            return curtMove;
        }
        else if (count1 < target) {
            count1 +=  queue2[queue2_idx];
            queue1.push(queue2[queue2_idx]);
            queue2_idx+=1;
        }
        else {
            count1 -=  queue1[queue1_idx];
            queue2.push(queue1[queue1_idx]);
            queue1_idx += 1;
        }
        curtMove++;
    }
    return answer;
}