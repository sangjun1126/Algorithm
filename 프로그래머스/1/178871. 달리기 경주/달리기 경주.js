function solution(players, callings) {
    var answer = [];
    var sangjunMap = {};
    for (let i = 0; i < players.length; i++) {
        sangjunMap[players[i]] = i;
    }
    for (let i = 0; i < callings.length; i++) {
        const idx = sangjunMap[callings[i]];
        const temp = players[idx-1];
        players[idx -1] = callings[i];
        players[idx] = temp;
        sangjunMap[callings[i]] = idx -1;
        sangjunMap[temp] = idx;
    }
    
    return players;
}