// Find the Second Largest Number in an Array

let arr: number[] = [10, 45, 23, 89, 67, 89];

let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => b - a);

console.log("Second Largest Number =", uniqueArray[1]);
