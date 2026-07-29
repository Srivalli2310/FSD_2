// Count the Frequency of Characters in a String

let str: string = "typescript";
let frequency: { [key: string]: number } = {};

for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);