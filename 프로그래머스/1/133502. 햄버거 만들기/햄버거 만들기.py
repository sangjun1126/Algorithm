def solution(ingredient):
    answer = 0
    solve = 0
    while solve <= len(ingredient) - 2 :
        if ingredient[solve : solve + 4] == [1,2,3,1]:
            del(ingredient[solve:solve+4])
            solve = solve - 3
            answer += 1
        solve += 1
    return answer