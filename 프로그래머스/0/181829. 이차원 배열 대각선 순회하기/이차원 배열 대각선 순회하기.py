def solution(board, k):
    n = len(board)
    m = len(board[0])
    result = 0

    for i in range(n):
        for j in range(m):
            if i + j <= k:
                result += board[i][j]

    return result