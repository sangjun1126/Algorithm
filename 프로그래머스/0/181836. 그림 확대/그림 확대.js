function solution(picture, k) {
    var answer = [];
    for(let i =0 ; i< picture.length; i ++) {
        const item = picture[i]
        let line = ''
        for(let j = 0; j < item.length ; j ++){
            const char = item[j]
           for (let l=0; l<k; l++) {
                if (char === '.') {
                    line += '.';
                }
                if (char === 'x') {
                    line += 'x';
                }
            }

        }
         for (let l=0; l<k; l++) {
             answer.push(line)
         }
    }
    return answer;
}