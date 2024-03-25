function solution(n, wires) {
    var answer = Number.MAX_SAFE_INTEGER;
    
    let tree = Array.from(Array(n+1), () => [])
    wires.map((e) => {
        let [a,b] = e;
        tree[a].push(b);
        tree[b].push(a);
    });
    
    function searchTree(root, exceptNum) {
        let count = 0;
        let visit = [];
        let queue = [root];
        visit[root] = true;
        while(queue.length) {
            let index = queue.pop();
            tree[index].forEach((x) => {
                if (x !== exceptNum && visit[x] !== true) {
                    visit[x] = true;
                    queue.push(x);
                }
            })
            count+=1;
        }
        return count;
    }
    
    wires.forEach(e => {
        let [a,b] = e;
        answer = Math.min(answer, Math.abs(searchTree(a,b) - searchTree(b,a)))
    });
    return answer;
}