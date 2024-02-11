function solution(arr, k) {
    const sorted = new Set(arr)
    let result = [...sorted].slice(0,k)
    
    for(let i =0; i < k - [...sorted].slice(0,k).length; i++ ){
        result.push(-1)
    }

    return result
}