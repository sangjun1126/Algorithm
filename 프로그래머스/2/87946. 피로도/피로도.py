import itertools
def solution(k, dungeons):
    condition= list(itertools.permutations(dungeons))
    success_list=[]
    k_=k
    
    for x in condition:
        success=0
        k_=k
        for i in range(len(x)):
            if k_>=x[i][0]:
                k_=k_-x[i][1]
                if k_>=0:
                    success+=1
                    success_list.append(success)
    return max(success_list)