def solution(number, limit, power):
    answer = 0

    for i in range(1, number+1):
        result = 0
        for j in range(1, int(i**0.5)+1):
            if i == j**2:
                result += 1
            elif i % j == 0:
                result += 2

        answer += result if not result > limit else power

    return answer
