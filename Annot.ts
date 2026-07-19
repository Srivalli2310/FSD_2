//3.Void type it is used to indicate that a function does not return any value. It is often used as the return type for functions that perform an action but do not return a value.

function logMessage(message:string):void{ 
    console.log("Alert:"+ message);
}

logMessage("This is a void function example.");


//3.Program with annotatioins
// Variable Annotations with movie data
let movieTitle:string="Inception";
let releaseYear:number=2010;
let isBlockbuster:boolean=true;

function displayMovieInfo(title:string, year:number, blockbuster:boolean):string{
    return (`Movie: ${title}, Released in: ${year}, Blockbuster: ${blockbuster}`);
}

let leadActors:string[]=["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"];

//Using the annotated variables and functions
const summary:string=displayMovieInfo(movieTitle, releaseYear, isBlockbuster);  //storing the return value of the function in a variable

console.log(summary);

