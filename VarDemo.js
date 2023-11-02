var a = 8;
var a = 56;
console.log(a);
a = 58;
console.log(a);

//variables can be acceessed outside the block as it is a global scope
{
    var x = 2;
}
// x CAN be used here
console.log(x);

//Redeclaring a variable inside a block will also redeclare the variable outside the block:
var x = 10;
// Here x is 10
console.log(x);
{
var x = 2;
// Here x is 2
console.log(x);
}
// Here x is 2
console.log(x);

//Redeclaring a variable inside a function block will not redeclare the variable outside the block:
var y = 100;
// Here y is 100
console.log(y);
function h(){
var y = 102;
// Here y is 102
console.log(y);
}
h();
// Here y is 100 because var is a function scope
console.log(y);

//Accessing the variable without assigning the value
var carName;
console.log(carName);

//Hoisting - Moving the declarations of the variables to the top it moves only the declarations and not the initializations
bikeName = 'Harley Davidson';//Assign the value to bikeName
console.log(bikeName);
var bikeName;// Declaration

function f1(){
    var a=10;
    console.log(a)
}
f1();
console.log(a);

var b=80;
{
    var j=90;
    console.log(b)// prints 80 as it a globalscope 
    console.log(j)// prints 90
}
console.log(b)// prints 80
console.log(j)// prints 90 as it is global scope and not inside a function 