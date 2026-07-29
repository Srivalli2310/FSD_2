// Remove Duplicate Characters from a String

let str: string = "programming";
let result: string = "";

for (let char of str) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log("Original String:", str);
console.log("Without Duplicates:", result);