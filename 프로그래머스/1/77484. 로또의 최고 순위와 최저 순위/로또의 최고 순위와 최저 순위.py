def solution(lottos, win_nums):
    sam = [6,6,5,4,3,2,1]
    inter = len(set(lottos) & set(win_nums))
    counts = lottos.count(0)

    return [sam[inter+counts], sam[inter]]