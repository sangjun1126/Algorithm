function solution(n, slicer, num_list) {
    var answer = [];
    const res = num_list.slice(slicer[0], slicer[1]+1)
    switch(n) {
        case 1 : answer = num_list.slice(0,slicer[1]+1); break;
        case 2 : answer = num_list.slice(slicer[0]); break;
        case 3 : answer = res; break;
        case 4 : answer = res.map((value, index) => { return res[index * slicer[2]]; }).filter((value) => value);  break;
    }
    
    return answer
}