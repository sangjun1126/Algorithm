from collections import Counter
def solution(X, Y):
    answer = []
    
    # 정수 개수
    countX, countY = Counter(X), Counter(Y)
    
    for i in range(10):
        val = min(countX[str(i)], countY[str(i)])
        for k in range(val):
            answer.append(str(i))
    
    answer.sort(reverse=True)
    ans = ''.join(answer)
    
    if ans == "":
        return "-1"
    if ans[0] == "0":
        return "0"
            
    return ans