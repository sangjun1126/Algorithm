function solution(my_string, indices) {
  
    let arr = [...my_string]
    indices.map((value) =>{
        arr[value] = 0
    })
    
    const result = arr.filter((value) => value!==0).join('')
    
    return result
}