def rotate(board, start_x, start_y, end_x, end_y):
    info = [board[start_x - 1][start_y - 1]]
    
    # East: start_x 열
    for i in range(start_y, end_y):
        info.append(board[start_x - 1][i])
        board[start_x - 1][i] = info[-2]
    # South: end_y 행
    for i in range(start_x, end_x):
        info.append(board[i][end_y - 1])
        board[i][end_y - 1] = info[-2]
    # West: end_x 열
    for i in range(end_y - 2, start_y - 2, -1):
        info.append(board[end_x - 1][i])
        board[end_x - 1][i] = info[-2]
    # North: stat_y 행
    for i in range(end_x - 2, start_x - 2, -1):
        info.append(board[i][start_y - 1])
        board[i][start_y - 1] = info[-2]
        
    return board, min(info)

def solution(rows, columns, queries):
    answer = []
    
    # board 생성
    board = [[0] * columns for _ in range(rows)]
    index = 1
    for i in range(rows):
        for j in range(columns):
            board[i][j] = index
            index += 1

    for start_x, start_y, end_x, end_y in queries:
        board, min_value = rotate(board, start_x, start_y, end_x, end_y)
        answer.append(min_value)
        
    return answer