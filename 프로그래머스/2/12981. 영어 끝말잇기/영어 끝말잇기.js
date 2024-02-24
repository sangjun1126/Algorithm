const solution = (n, words) => {
  const hash = {};
  let i;
  for (i = 0; i < words.length; i++) {
    const current = words[i];
    const firstLetter = current[0];
    const colNum = Math.floor(i / n);
    const rowNum = i % n;
    if (i >= 1) {
      const lastWord = words[i - 1];
      const lastLetter = lastWord[lastWord.length - 1];
      if (lastLetter != firstLetter) {
        return [rowNum + 1, colNum + 1];
      }
    }
    if (!hash.hasOwnProperty(current)) {
      hash[current] = 1;
    } else {
      hash[current]++;
      return [rowNum + 1, colNum + 1];
    }
  }
  if (i == words.length) {
    return [0, 0];
  }
};