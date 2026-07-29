// Check Perfect Number

let num: number = 28;
let sum = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sum += i;
    }
}

if (sum === num) {
    console.log(num + " is a Perfect Number");
} else {
    console.log(num + " is Not a Perfect Number");
}