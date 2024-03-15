function solution(genres, plays) {
    const answer = [];
    
    const genresNumHash = {};
    const bestAlbumHash = {};
    for (let i = 0; i < genres.length; i++) {
        const id = i;
        const genre = genres[i];
        const play = plays[i];
        
        genresNumHash[genre] ? (genresNumHash[genre] += play) : (genresNumHash[genre] = play);
        if (!bestAlbumHash[genre]) bestAlbumHash[genre] = [];
        bestAlbumHash[genre].push({id, play});
    }
    
    const sortedGenres = Object.entries(genresNumHash);
    sortedGenres.sort((a, b) => b[1] - a[1]);
    
    for (const [genre] of sortedGenres) {
        bestAlbumHash[genre].sort((a, b) => {
            if (a.play === b.play) {
                return b.id - a.id;
            }
            
            return a.play - b.play;
        });
        
        const getAlbumNum = bestAlbumHash[genre].length >= 2 ? 2 : 1;
        
        for (let i = 0; i < getAlbumNum; i++) {
            answer.push(bestAlbumHash[genre].pop().id);
        }
    }

    return answer;
}