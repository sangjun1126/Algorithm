def solution(nums):
    answer = 0
    limit = len(nums) // 2
    num = list(set(nums))[:limit]
    answer = len(num)
    return answer