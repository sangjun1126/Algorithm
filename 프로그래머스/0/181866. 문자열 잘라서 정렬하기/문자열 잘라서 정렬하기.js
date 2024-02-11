function solution(myString) {
    const parts = myString.split("x"); 
    const nonEmptyParts = parts.filter(part => part.length > 0);
    const sortedParts = nonEmptyParts.sort((a, b) => a.localeCompare(b));
    return sortedParts;
}