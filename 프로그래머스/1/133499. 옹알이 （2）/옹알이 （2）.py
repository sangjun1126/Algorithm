def solution(babbling):
    answer = 0
    can = ["aya","ye","woo","ma"]   
    
    for i in babbling:                  
        for j in can:            
            if j+j not in i:        
                i = i.replace(j,' ')  
                
        if i.strip() == '':          
            answer += 1       
            
    return answer