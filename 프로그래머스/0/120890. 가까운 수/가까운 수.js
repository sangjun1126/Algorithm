function solution(array, n) {
   array.sort((a,b) => a-b)
   let 두수의차 = Infinity
   let result = 0

   for (let i of array) {
       if(Math.abs(n-i)< 두수의차){
           두수의차 = Math.abs(n-i)
result = i
       }
   } 
    return result;
}

