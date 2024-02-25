function solution(n, start, end, roads, traps) {
    const traps_idx = {};
    traps.forEach((trap, i)=>{
        traps_idx[trap] = i;
    })
    const graph = Array(n+1).fill(0).map(_ => []);
    for(let [x, y, weight] of roads){
        graph[x].push([y, weight])
        graph[y].push([x, -weight]) //반대방향은 -붙여줌.
    }
    //start부터 end까지 가는데 걸린 비용
    let answer = Number.MAX_SAFE_INTEGER;
    console.log(answer )
    //각 노드에 어떤 state의 어떤 비용으로 있었는지 저장하는 객체 배열
    let dp = Array(n+1).fill(0).map(_ => new Object());
    //어느 곳의 함정을 몇 번(0 or 1) 밟았는지 나타내는 문자열 traps_state
    const traps_state = Array(traps.length).fill(0).join('');//키로 사용할 거라 문자열
    //큐에 들어가는 정보는 [현재노드, state, cost]
    const q = [[start, traps_state, 0]]
    dp[start][traps_state] = 0;
    while(q.length){
        const[cur, state, cur_cost] = q.shift();
        //state 정보를 읽고 간선의 방향 계산
        //(간선의 양쪽에 있는 함정을 몇 번 밟았는지에 따라 방향 결정)
        const cur_flag = cur in traps_idx ? +state[traps_idx[cur]] : 0;
        let next_flag; 
        let nstate;
        for(let [next, next_cost] of graph[cur]){
            if(next in traps_idx){
                next_flag = +state[traps_idx[next]];
                nstate = state.slice(0, traps_idx[next]) + `${1 - next_flag}` 
                        +  state.slice(traps_idx[next] + 1);
            }
            else{
                next_flag = 0;
                nstate = state;
            }
            //if 간선의 방향이 갈 수 있는 방향일 경우,
            ///**이 *보다 연산자 우선순위 높음*/
            if(next_cost * (-1) ** (cur_flag + next_flag) > 0){
                const cost = cur_cost + Math.abs(next_cost)
                //탐색을 하지 않았거나
                //탐색했었어도 더 비용이 낮은 경로라면
                if(!(nstate in dp[next]) || cost < dp[next][nstate]){
                    if(cost < answer){
                        dp[next][nstate] = cost;
                        if(next === end) answer = cost;
                        else q.push([next, nstate, cost])
                    }
                }
            }
        }
    }
    return answer;
}