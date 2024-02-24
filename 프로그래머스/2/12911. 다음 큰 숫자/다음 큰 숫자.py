def solution(n):
    tmp = n+1
    while True:
        if bin(tmp)[2:].count('1') == bin(n)[2:].count('1'):
            return tmp
        tmp += 1