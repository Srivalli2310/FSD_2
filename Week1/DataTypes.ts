//using the 'any' type
let randomValue:any=10 ;//the variable can hold any type of value
randomValue="Hello"; //now it holds a string
randomValue=true; //now it holds a boolean

//2.Unknown Type
let UserInput:unknown="Hello"; //unknown type can hold any value but we need to check the type before using it

if(typeof UserInput == "string"){
    console.log(UserInput.length); //we can access the length property only if we are sure that the variable is of type string
}

function displayMessage(): void {
    console.log("Welcome to TypeScript");
}

displayMessage();


userInput = 25;

// Number
if (typeof userInput === "number") {

    userInput = function () {
    return "TypeScript";
};

// Function
if (typeof userInput === "function") {
    console.log(userInput());
}
    console.log("Square:", userInput * userInput);
}
