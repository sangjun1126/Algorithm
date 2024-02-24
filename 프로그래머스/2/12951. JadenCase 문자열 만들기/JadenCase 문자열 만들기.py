def solution(string):
    answer = ' '
    string = string.lower()
    for s in string:
        if s.isalpha() and answer[-1] == ' ':
            answer+=s.upper()
        else:
            answer+=s
    return answer[1:]
    
def solution(s):
    return ' '.join([word.capitalize() for word in s.split(" ")])