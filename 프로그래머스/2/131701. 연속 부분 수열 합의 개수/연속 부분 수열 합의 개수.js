function solution(elements) {
    const length = elements.length
    const temp = [...elements,...elements]
    const set = new Set()
    for(let i =1; i <=length; i++){
        for(let left = 0; left < length; left++){
            let right = left+i
            const val = temp.slice(left,right).reduce((acc,cur)=> acc+cur,0)
            set.add(val)
        }
    }
    return set.size;
}
