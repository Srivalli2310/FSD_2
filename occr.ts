// Count the Occurrences of Each Element in an Array

let arr: number[] = [1, 2, 2, 3, 4, 3, 2, 5];

let count: { [key: number]: number } = {};

for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
}

console.log(count);