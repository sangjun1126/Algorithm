function solution(binomial) {
   var arr = binomial.split(' ')
   var result = 0
   
   if(arr[1]=='+'){
       result = Number(arr[0]) + Number(arr[2])
   } else if (arr[1]=='-') {
       result = Number(arr[0]) - Number(arr[2])
   } else if (arr[1]=='*') {
       result = Number(arr[0]) * Number(arr[2])
   }
    return result
}

