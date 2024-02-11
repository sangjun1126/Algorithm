function solution(strArr) {

    const res= Math.max(...Object.values(strArr.map((value) => {
        return value.length
    }).reduce((acc, obj) => {
         
         acc[obj] = acc[obj] ?? []; 

         acc[obj].push(obj);
         return acc;
        }, {})).map((value) => value.length))
    
    return res;
}