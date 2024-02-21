function solution(dartResult) {
  const bouns = { S: 1, D: 2, T: 3 };// 먼저 보너스의 배율을 객체화시켜 혼동이 없게 하고
  let temp = 0;// 임시로 저장할 곳을 선언한다.
  let result = []; //결과
  for (let i = 0; i < dartResult.length; i++) {// 다트 결과를 담은 결과 string를 처음부터 끝까지 forloop을 한번 돌린다.
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {// 이 부분에서 조금 문제가 있었다.
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) { // 이부분은 10을 골라내는 부분이다.
        temp = 10;//10이 있으면 10을 담아준다.
        i++;// 이부분을 생각을 못했는데 dartResult[i] == 1 이기 때문에 굳이 다음 0를 loop을 안돌아도된다. 만약에 0도 loop을 돈다면 이상한 숫자가 푸쉬된다.
      } else {
        temp = dartResult[i];
      }
    } else if (
      dartResult[i] === "S" ||
      dartResult[i] === "D" ||
      dartResult[i] === "T"
    ) {
      temp = Math.pow(temp, bouns[dartResult[i]]); //보너스를 temp에 담겨 있는 거듭 제곱을 하는 부분
      if (dartResult[i + 1] === "*" || dartResult[i + 1] === "#") { // 또 그 loop을 돌고 있는 부분 다음에 *과 # 있으면 계속 loop을 돌고 
        continue;
      } else {
        // 아니면 결과 배열에 푸쉬
        result.push(temp);
        temp = 0; //그리고 초기화
      }
    } else if (dartResult[i] === "*") {//loop이 돌면서 *를만나면 temp 부분을 2를 곱하고
      temp = temp * 2;
      if (result[result.length - 1]) { //만약에 그 전 점수까지도 2를 곱해준다.
        result[result.length - 1] = result[result.length - 1] * 2;
      }
      result.push(temp);
      temp = 0;
    } else {
      temp = temp * -1; // 이부분은 # 부분이고 -1로 바꿔 준다.
      result.push(temp);
      temp = 0;
    }
  }
  return result.reduce((a, c) => a + c); // 배열을 다 더해준다.
}