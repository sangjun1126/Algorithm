const solution = (stones, k) => {
    return BS(stones, k, 1, 200000000);
}

const BS = (list, k, min, max) => {
    if (min === max) {
        return min;
    }
    let mid = Math.round((min + max) / 2);
    let count = 0;
    
    for (let i = 0 ; i < list.length ; i++) {
        if (count === k) {
			break;
		}
        let value = list[i]-(mid-1);
        value <= 0 ? count++ : count = 0;
    }
    
    if (count === k) {
        return BS(list, k, min, mid-1);
    }else {
        return BS(list, k, mid, max);
    }
}
