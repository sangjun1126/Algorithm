from collections import Counter
def solution(k, tangerine):
    x = 0
    cnt = 0
    for i,j in Counter(tangerine).most_common(k):
        x += j;
        cnt += 1;
        if x >= k:
            return cnt