//Primitive data types are passed by value and non-primitive data types are passed by reference.
var a = 8;
console.log(a);
let b = a;
b = 88;
console.log(a);
console.log(b);

//Objects are passed by reference
const c = [1, 2, 3, 4];
const d = c;
d[1] = 22;
console.log(c);
console.log(d);