function prime(k) {
    if(k === 2) return true;
    if(k % 2 === 0) return false;
    if(k === 3) return true;
    for(let i = 3; i*i <= k; i += 2){
        if(k % i === 0) return false;
    }
    return true;
} 

// 3중 반목문
function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
             	 // 더한 값을 key에 담는다.
                let key = nums[i] + nums[j] + nums[k]; 
              	// key가 소수이면 answer++
                if(prime(key)) answer++;
            }
        }
    }
    return answer;
}