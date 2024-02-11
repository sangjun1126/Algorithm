function solution(arr) {
   let answer = [arr[0]];
   for(let i=1; i <arr.length; i++){
      answer[answer.length - 1] === arr[i] ? answer.pop() : answer.push(arr[i])
   }
    
    return answer.length ? answer : [-1]
 
}
