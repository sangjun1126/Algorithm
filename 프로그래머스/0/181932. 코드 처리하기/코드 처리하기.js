function solution(code) {
  let mode = 0;
  let ret = "";

  for (let idx = 0; idx < code.length; idx++) {
    if (mode === 0) {
      if (code[idx] !== "1") {
        if (idx % 2 === 0) {
          ret += code[idx];
        }
      } else {
        mode = 1;
      }
    } else if (mode === 1) {
      if (code[idx] !== "1") {
        if (idx % 2 !== 0) {
          ret += code[idx];
        }
      } else {
        mode = 0;
      }
    }
  }

  if (ret === "") {
    return "EMPTY";
  } else {
    return ret;
  }
}