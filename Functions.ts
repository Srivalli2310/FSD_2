//1.parameter and Return Types(Explicit)
//this func takes a string and returns a string

function greet(name:string):string{
    return `Hello,${name}!`;
}

//2. Default Parameters:if not provided then it gives "Guest" as default value
function greetWithDefault(name:string="Guest"):string{
    return `Hello (default),${name}!`;
}

//3.optional parameters:if parameters are not provided then it gives undefined as default value

function callOptional(name:string,age?:number):string{
    if(age){
        return `Hello,${name}! You are ${age} years old.`;
    }
    return `Hello,${name}! Age is not provided.`;
}

///4.rest parameters: it allows us to pass a variable number of arguments to a function. The rest parameter is represented by three dots (...) followed by the name of the array that will hold the remaining arguments.

function sumNumbers(...numbers:number[]):number{
    return numbers.reduce((sum, num) => sum + num, 0);
}


console.log(greet("Alice")); //Output: Hello, Alice!
console.log(greetWithDefault()); //Output: Hello, Guest!
console.log(callOptional("Bob")); //Output: Hello, Bob! Age is not provided.
console.log(callOptional("Charlie", 25)); //Output: Hello, Charlie! You are 25 years old.
console.log(sumNumbers(1, 2, 3, 4, 5)); //Output: 15
