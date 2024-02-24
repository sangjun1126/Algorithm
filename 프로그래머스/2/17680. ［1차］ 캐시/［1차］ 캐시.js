function solution(n, cities) {
    let cache = new Set(), answer = 0;
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i].toUpperCase();
        if (cache.has(city)) {
            answer ++;
            cache.delete(city);
            cache.add(city);
        } else {
            answer += 5;
            cache.add(city);
            if (n < cache.size) {
                cache.delete(cache.values().next().value);
            }
        }
    }
    return answer;
}