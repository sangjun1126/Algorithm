function solution(array) {
let newArray = new Array(Math.max(...array)+1).fill(0);
for (let i =0; i < array.length; i++) {
newArray[array[i]] += 1
}
if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
 return -1
} else {
return newArray.indexOf(Math.max(...newArray));
};
}