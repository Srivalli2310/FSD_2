//using the 'any' type
let randomValue:any=10 ;//the variable can hold any type of value
randomValue="Hello"; //now it holds a string
randomValue=true; //now it holds a boolean

//2.Unknown Type
let UserInput:unknown="Hello"; //unknown type can hold any value but we need to check the type before using it

if(typeof UserInput == "string"){
    console.log(UserInput.length); //we can access the length property only if we are sure that the variable is of type string
}


