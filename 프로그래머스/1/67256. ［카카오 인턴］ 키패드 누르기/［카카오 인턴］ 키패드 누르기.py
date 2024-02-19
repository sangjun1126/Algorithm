def solution(numbers, hand):
    answer = ''
    left_cur = 10
    right_cur = 12
    
    for i in numbers:
        # 왼쪽 열
        if i in [1, 4, 7]:
            left_cur = i
            answer += 'L'
        # 오른쪽 열
        elif i in [3, 6, 9]:
            right_cur = i
            answer += 'R'
        # 가운데 열
        else:
            if i == 0:
                i = 11
                
            absLeft = abs(left_cur - i)
            absRight = abs(right_cur - i)
            
            # 왼손에 더 가까움
            if sum(divmod(absLeft, 3)) < sum(divmod(absRight, 3)):
                left_cur = i
                answer += 'L'
            # 오른손에 더 가까움
            elif sum(divmod(absRight, 3)) < sum(divmod(absLeft, 3)):
                right_cur = i
                answer += 'R'
            # 거리 같음
            else:
                # 왼손잡이
                if hand == 'left':
                    left_cur = i
                    answer += 'L'
                # 오른손잡이
                else:
                    right_cur = i
                    answer += 'R'
    return answer