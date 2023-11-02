/*In a programming language, variables are used to store data values.
JavaScript uses the keywords var, let and const to declare variables.
Primitive data types - It has single data whereas object can store collection of data
Number
String
Boolean
BigInt
undefined
Null
Symbol
Non-Primitive data type
Object
*/

//Numbers can be written with or without decimals
var a = 10.5;
var b = 96;
console.log("A=", a, "B=", b);
//It can be -Infinity +Infinity and NaN
console.log(3/0);
console.log(-3/0);
console.log(0/8);
console.log("A"/5);

//Strings are text, written within double, single quotes and backtits :
var a = "Neema";
var b = 'Unicorn';
var c = `g`;
console.log(a,b,c);

//BigInt - JS can store numbers from -9007199254740991 => -(2^53 - 1) to +9007199254740991 => +(2^53 -1) if we want to use numbers greater than this we use BigInt
let x = BigInt(123456789012345678901234567890);
console.log(x);
//BigInt is represented by appending n at the last
let y = 900719925124740998n;
//Adding two BigInt numbers
console.log(y + 1n);
//Cannot add Number with BigInt
//console.log(y + 8);

//Boolean - True or False
const dataChecked = true;
const valueEncountered = false;
console.log(dataChecked, valueEncountered);

//Undefined
let name;
console.log(name);

//In JavaScript, null is a special value that represents empty or unknown value. For example,
let number = null;
console.log(number);

//Symbol
let i = Symbol('Hello');
let j = Symbol('Hello');
console.log(i.description, j);

//Object - any type of data
let person = {
    name : "John",
    age : 55
}
console.log(person);

//First it can Number then it can changed to Strings like that
let data;
data = 5;
console.log(data);
data = "Javascript Programming";
console.log(data);

//Exponential Notation
console.log(125e5); //e5 = 10^5, e3 = 10^3
console.log(125e-5); //e-5 = 1/10^5, e-3 = 1/10^3