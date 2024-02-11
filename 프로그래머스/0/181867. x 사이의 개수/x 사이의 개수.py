def solution(myString):
    answer = []
    current_length = 0
    
    for char in myString :
        if char == 'x' :
            answer.append(current_length)
            current_length = 0
        else :
            current_length += 1
    answer.append(current_length)
    return answer