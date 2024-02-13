function solution(n) {
    const matrix = Array.from(Array(n), () => Array(n).fill(0));
    const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let y = 0, x = 0, direct = 0, num = 1;
    
    while(num <= n**2) {
        
        matrix[y][x] = num;
        
        let nextY = y + move[direct][0];
        let nextX = x + move[direct][1];

        
        if (nextY >= n || nextY < 0 || nextX >= n || nextX < 0 || matrix[nextY][nextX] !== 0) {
            direct = (direct + 1) % 4;
            nextY = y + move[direct][0];
            nextX = x + move[direct][1];
        };
        
        y = nextY;
        x = nextX;
        
        num++;
    };
    
    return matrix;
};