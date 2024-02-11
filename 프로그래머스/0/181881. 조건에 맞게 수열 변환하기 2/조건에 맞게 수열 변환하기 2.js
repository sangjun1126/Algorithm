function solution(arr) {
    let idx = 0;
    var array = arr;
    
    while(true) {
        const current = array.map((value) =>{
            if(value >= 50 && value % 2 ===0) return value/2
            if(value < 50 && value % 2 === 1) return value * 2 +1
            return value
         })
        
         const isSame = array.every((a, i) => a === current[i])
         if(isSame) break 
         idx += 1
        
        array = current
    }
    
    return idx;
}