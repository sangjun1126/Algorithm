function solution(wallpaper) {
    let answer = [];
    let X = [];
    let Y = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                X.push(i);
                Y.push(j);
            }
        }
    }
    
    X.sort((a, b) => a - b);
    Y.sort((a, b) => a - b);
    
    answer = [X[0], Y[0], X[X.length - 1] + 1, Y[Y.length - 1] + 1]
    
    return answer;
}