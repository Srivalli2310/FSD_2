// Find the Missing Number in an Array

let arr: number[] = [1, 2, 3, 5, 6];

let n = arr.length + 1;

let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr.reduce((sum, num) => sum + num, 0);

console.log("Missing Number =", expectedSum - actualSum);
