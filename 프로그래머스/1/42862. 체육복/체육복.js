function solution(n, lost, reserve) {
    let students = new Array(n+1).fill(1); 
    console.log(students)
    for(let i=0;i<lost.length;i++){
        students[lost[i]]=0;
    }
    for(let i=0; i< reserve.length;i++){
        students[reserve[i]]++;
    }
    for(let i=1;i<students.length;i++){
        if(students[i]===0){
            if(students[i-1]===2){
                students[i-1]--;
                students[i]++;
            }
            else if(students[i+1]===2){
                students[i+1]--;
                students[i]++
            }
        }
    }
    return students.filter((el)=>{
        return el===1 || el===2;
    }).length-1
    //students 배열에 0번째 값은 dummy이므로 1을 빼줘야한다
}