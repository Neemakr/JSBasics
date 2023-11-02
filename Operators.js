let x = 5;
let y = 3;

//Addition
console.log(x + y);

//Subtraction
console.log(x - y);

//Multiplication
console.log(x * y);

//Division
console.log(x / y);

//Modulus
console.log(x % y);

//Increment
console.log(++x);
console.log(x++);//prints 6 and then increases to 7
console.log(x);

//Decrement
console.log(--x);
console.log(x--);
console.log(x);

//Exponential
console.log(x ** y);

//Math.pow(x,y) also produces same result as **(exponential)
console.log(Math.pow(x,5));

//?? - it is used between two values, if the first value is Undefined or Null the second value is assigned.
let z;
console.log(z ??= 99);