function solution(num_list) {
    let odd = 0;
    let even =0;
    
    num_list.map((elem,index) => {
        index % 2 != 0? odd += elem : even += elem;
    });
    return odd >= even ? odd : even;
}
    //for (let i=0; i<num_list.length; i=i+2){
    //for (let j=1; j<num_list.length; j=j+2){
        //    if(num_list[j] > num_list[i]){
          //      answer += num_list[j]
           // } else {
             //   answer += num_list[i]
           // }
       // }
   // }