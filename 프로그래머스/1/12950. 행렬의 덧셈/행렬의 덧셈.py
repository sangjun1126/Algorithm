def solution(arr1, arr2):
    return [[x[i]+y[i] for i in range(len(x))] for x,y in zip(arr1, arr2)]