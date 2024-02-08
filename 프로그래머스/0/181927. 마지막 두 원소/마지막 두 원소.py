def solution(num_list):
    a = num_list[-1] # 마지막 원소
    b = num_list[-2] # 마지막 그 전 원소
    new_element = [a - b if a > b else a * 2]
    return num_list + new_element