function solution(priorities, location) {
    var answer = 0;
    const array = priorities.map((process, index) => {
        return {process, index};
    })
    
    while(array.length) {
        const queue = array.shift();
        if (array.some((el) => el.process > queue.process)) {
            array.push(queue);
        } else {
            answer ++
            if (queue.index === location) break
        }
    }
    return answer;
}