function solution(my_string, queries) {

    queries.map((value) =>{
        const arr = [...my_string]
        const [from, to] = value
        const slicedText = arr.slice(from, to + 1)
        const reversed = slicedText.reverse().join('')
        arr.splice(from, to-from + 1 , reversed)
        my_string = arr.join('')
    })
    
    return my_string
}