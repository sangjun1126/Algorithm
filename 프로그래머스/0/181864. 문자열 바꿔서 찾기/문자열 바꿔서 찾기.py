def solution(myString, pat):
    answer = ''
    for char in myString:
        if char == 'A':
            answer += 'B'
        else:
            answer += 'A'
    
    if pat in answer:
        return 1
    else:
        return 0