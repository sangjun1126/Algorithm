def to_day(days):
    y, m, d = map(int, days.split('.'))
    
    return y*12*28 + m*28 + d

def solution(today, terms, privacies):
    ans = []

    todays = to_day(today)
    term = {x[0]: int(x[2:])*28 for x in terms}
    
    for i, pri in enumerate(privacies):
             
        day = to_day(pri[:-2]) + term[pri[-1]]
        
        if todays >= day:
            ans.append(i+1)
        
    return ans