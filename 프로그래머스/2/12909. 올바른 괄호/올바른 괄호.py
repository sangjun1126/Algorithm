def solution(s):
    
    stack = [] 
    
    for i in s : 
        if len(stack) != 0 and i == ')' : 
            stack.pop() 
        elif len(stack) == 0 and i == ')' :
            return False 
        else : 
            stack.append(i) 
    
    return len(stack) == 0 