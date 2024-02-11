function solution(myStr) {
    let splitedStr = myStr.split('a').join(' ').split('b').join(' ').split('c').join(' ').split(' ').filter((value) => value)
    return splitedStr.length > 0 ? splitedStr :  ['EMPTY']
}