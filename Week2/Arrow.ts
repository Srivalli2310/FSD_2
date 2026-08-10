//1.Traditional  Function(The full form)

function add(a:number,b:number):number{
    return a+b;
}

console.log(add(5,10));  //Output: 15

//2.Arrow Function(Short form)  :syntax: (parameters) => {function body}

let multiply=(a:number,b:number):number=>{
    return a*b;
}

//if function has only one statement and that statement returns a value, we can omit the curly braces and the return keyword.

const getmsg = (name:string):string => `hello ${name}`;  

const result:number=multiply(5,10);  //Output: 50
console.log(result);
console.log(getmsg("srivalli"));  //Output: hello srivalli

