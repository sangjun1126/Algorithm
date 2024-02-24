from collections import deque

mx = [1, -1, 0, 0]
my = [0, 0, -1, 1]

def bfs(p, x, y):
    visited = [[0]*5 for _ in range(5)]
    que = deque()
    que.append((x,y, 0))
    visited[x][y] = 1

    while que:
        x, y, dist = que.popleft()
        if 0 < dist < 3 and p[x][y] == 'P':     ##1, 2 사이에 P가 있을 시 종료
            return False
        if dist > 2:
            break
        for i in range(4):
            dx = x + mx[i]
            dy = y + my[i]
            nd = dist + 1

            if 0<= dx < 5 and 0<= dy < 5:
                if p[dx][dy] != 'X' and not visited[dx][dy]:
                    que.append((dx, dy, nd))
                    visited[dx][dy] = 1
    return True

def solution(places):
    answer = []

    for p in places:
        check = 0
        for i in range(len(places)):
            for j in range(len(places[0])):
                if p[i][j] == 'P':
                    if not bfs(p, i, j):
                        answer.append(0)
                        check = 1
                        break
            if check:
                break
        else:
            answer.append(1)


    return answer