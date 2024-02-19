def solution(park, routes):
    a,b = 0,0
    
    #시작지점 찾기
    for k in range(len(park)):
        for g in range(len(park[k])):
            if park[k][g] == "S":
                a = k
                b = g
                break
                
    #이동하기
    for route in routes:
        aa = a
        bb = b
        
        print(route)
        # 고려할 것 : 방향_route[0], 이동거리_route[2], OX_park[a][b]
        for w in range(int(route[2])):
            if route[0] == 'E' and bb != len(park[0])-1 and park[aa][bb+1] != 'X':
                bb += 1
                if w == int(route[2])-1:
                    b = bb

            elif route[0] == 'S' and aa+1 != len(park) and park[aa+1][bb] != 'X':
                aa += 1
                if w == int(route[2])-1:
                    a = aa
                    
            elif route[0] == 'W' and bb != 0 and park[aa][bb-1] != 'X':
                bb -= 1
                if w == int(route[2])-1:
                    b = bb
            
            elif route[0] == 'N' and aa != 0 and park[aa-1][bb] != 'X':
                aa -= 1
                if w == int(route[2])-1:
                    a = aa
    return [a,b]