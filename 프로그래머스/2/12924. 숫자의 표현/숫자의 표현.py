def solution(n):
    count=1

    for i in range(1, n//2+1):#연속할 수 있는 수가 n의 반절+1을 넘어가지 않음
        sum=0#여기에 i가 변할때마다 누적값달라짐
        while sum<n:
            sum+=i
            i+=1
        if sum==n:
            count+=1
    return count