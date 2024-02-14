function solution(my_string, num1, num2) {
    const result = [...my_string];
result.splice(num1, 1, my_string[num2])
result.splice(num2, 1, my_string[num1])
return result.join("");
}