function solution(myString) {
  var replacedString = '';

  for (var i = 0; i < myString.length; i++) {
    var currentChar = myString[i];
    console.log(currentChar)
    if (currentChar < 'l') {
      replacedString += 'l';
    } else {
      replacedString += currentChar;
    }
  }

  return replacedString;
}
