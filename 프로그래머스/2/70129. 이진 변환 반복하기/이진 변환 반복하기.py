def solution(s):
    count_bin, count_zero=0, 0
    while s!='1':
        count_zero+=s.count("0")
        s=s.replace("0","")
        s=bin(len(s))[2:]
        count_bin+=1
    return [count_bin, count_zero]