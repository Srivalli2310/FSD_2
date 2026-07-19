let user:String = "srivalli";
let age:number=19;

let isActive:boolean=true;

console.log(`User: ${user}, Age: ${age}, Active: ${isActive}`);  //this is a template literal that allows embedding expressions inside string literals.

//a simple function using these types

function greetUser(name: String, age: number, isActive: boolean): void {
    if (isActive) {
        console.log(`Hello ${name}, you are ${age} years old and your account is active.`);
    } else {
        console.log(`Hello ${name}, you are ${age} years old and your account is inactive.`);
    }

}

greetUser(user, age, isActive);  //calling the function with the defined variables