function solution(arr) {
    let answer = arr;
    
    let i = arr.length
    
    while(true){
        if( (i & (i - 1)) === 0) break;
        else i++;
    }
    
  
    if(arr.length === i) return arr
    else {
        const extra = Array(i - arr.length).fill(0);
        return [...arr, ...extra];
    }
  
}