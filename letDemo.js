//This is not allowed
let x = "John Doe";
//let x = 0;// Not allowed 

//Allowed
let a = 2;
a = 4;
console.log(a);

//Variables declared inside a { } block cannot be accessed from outside the block:
{
    let m = 9;
}
//cannot access m here
//console.log(m);

//Redeclaring a variable inside a block will not redeclare the variable outside the block:
let i = 10;
// Here i is 10
console.log(i);
{
let i = 2;
// Here i is 2
console.log(i);
}
// Here i is 10
console.log(i);

//Accessing without initializing the value 
let j;
console.log(j);
j = 1999

//Hoisting with let and const are not done
//Variables defined with let and const are hoisted to the top of the block, but not initialized.
//Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
//Using a let variable before it is declared will result in a ReferenceError.
//carName = "MG";
//console.log(carName);
let carName;

var aa = 10;
console.log("a=", aa);
//let aa = 10; //Var cannot be declared as let 
var b = 30;
function f() {
    if (true) {
        var b = 9;
 
        // It prints 9
        console.log(b);
    }
    console.log(b);
}
f()
 
// It prints 10
console.log(aa)
console.log(b);

let xx;       // Now x is undefined
xx = 5;       // Now x is a Number
xx = "John";  // Now x is a String
console.log(xx);