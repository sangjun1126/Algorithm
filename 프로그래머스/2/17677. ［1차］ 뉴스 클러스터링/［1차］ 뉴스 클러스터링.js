function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let str1_arr = [];
  let intersection = 0; // 교집합
  let union = 0; // 합집합

  for (let i = 0; i < str1.length - 1; i++) {
    if (
      str1.charCodeAt(i) >= 97 &&
      str1.charCodeAt(i) <= 122 &&
      str1.charCodeAt(i + 1) >= 97 &&
      str1.charCodeAt(i + 1) <= 122
    )
      str1_arr.push(str1.slice(i, i + 2));
  }

  union += str1_arr.length;

  for (let i = 0; i < str2.length - 1; i++) {
    if (
      str2.charCodeAt(i) >= 97 &&
      str2.charCodeAt(i) <= 122 &&
      str2.charCodeAt(i + 1) >= 97 &&
      str2.charCodeAt(i + 1) <= 122
    ) {
      const word = str2.slice(i, i + 2);

      if (str1_arr.includes(word)) {
        intersection++;
        str1_arr.splice(str1_arr.indexOf(word), 1);
      } else union++;
    }
  }

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}