function solution(a, b, c, d) {
    var answer = 0;

    var arr = [a , b , c , d]
    
    var frequency = {};
   
    for (var i = 0; i < arr.length; i++) {
      var currentNumber = arr[i];
    
      if (frequency[currentNumber]) {
        frequency[currentNumber]++;
      } else {
        frequency[currentNumber] = 1;
      }
    }
    
    Object.entries(frequency).map(([key, value], index) => {
        let array = Object.entries(frequency)
        
        if(value === 4) {
            answer = 1111 * Number(key)
        }  else if(value === 3){
            let res = array.filter((item) => item[1] === 1)
            answer = (Number(10 * Number(key)) + Number(res[0][0])) ** 2
        } else if(value === 2){
           
          if(array.length === 3) {
              let res = array.filter((value) => value[1] === 1)
              
              answer = Number(res[0][0]) * Number(res[1][0])
          } else {
                answer = (Number(array[0][0]) + Number(array[1][0])) * Math.abs( Number(array[0][0]) -  Number(array[1][0]))
          }
          
        } else if(array.length === 4){
                answer = Math.min(a,b,c,d)
            } 
    })
  
    return answer
}