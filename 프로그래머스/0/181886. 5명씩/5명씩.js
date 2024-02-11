function solution(names) {
  let groupedNames = [];
  const numGroups = Math.floor(names.length / 5); // 그룹의 개수 계산

  for (let i = 0; i < numGroups; i++) {
    const startIndex = i * 5; // 각 그룹의 시작 인덱스
    const group = names.slice(startIndex, startIndex + 5); // 5명씩 묶은 그룹
    groupedNames.push(group[0]); // 그룹의 첫 번째 사람을 결과 배열에 추가
  }

  // 마지막 그룹 처리
  if (names.length % 5 !== 0) {
    const lastGroup = names.slice(numGroups * 5); // 마지막 그룹의 이름들
    groupedNames.push(lastGroup[0]); // 마지막 그룹의 첫 번째 사람을 결과 배열에 추가
  }

  return groupedNames;
}