function solution(brown, yellow) {
  
    let height = 0;
    let width = 0;
  
    for(height = 3; height <= (brown + yellow)/height; height++){
        width = Math.floor((brown + yellow)/height);
        if(yellow === (width - 2)*(height - 2)){
            break;
        }
    }
    return [width, height];
}