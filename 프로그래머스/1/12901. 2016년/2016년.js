function solution(a, b) {
    var date = new Date(`2016-${a}-${b}`);
    var index = date.getDay();
    var weekDay = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    return weekDay[index];
}