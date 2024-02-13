function solution(paramArr) {
    let arr = paramArr;
    const row = arr.length
    const colum = arr[0].length
    
//    열이 부족한 경우
    if(row > colum) {
        const diff = row - colum 
        for(let idx1 = 0; idx1 < arr.length; idx1++) {
            for(let idx2 = 0; idx2 < diff; idx2++) {
                arr[idx1].push(0)
            }
        }
    } else {
//    행이 부족한 경우
        const diff = colum - row
        for(let idx = 0; idx < diff; idx++) {
            arr.push(Array(colum).fill(0))
            
        }
    }
    return arr;
}