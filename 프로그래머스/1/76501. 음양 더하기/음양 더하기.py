def solution(absolutes, signs):
#     answer = 0
#     result = 0
#     for i,j in zip (absolutes, signs):
#         if j == False:
#             answer = -i
#         else :
#             answer = i
#         result += answer
#     return result
    return sum (i if j else -i for i, j in zip(absolutes, signs))