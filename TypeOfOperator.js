console.log(typeof 3);
console.log(typeof(3));
console.log(typeof 3.14);
console.log(typeof 0);
console.log(typeof "");
console.log(typeof "John");
console.log(typeof NaN);

//Typeof operator returns object for Arrays, object, null and date
console.log(typeof null);
let person = {

};
console.log(typeof person);
let arr = [1, 2, 3, 4];
console.log(typeof arr);
let d = new Date();
console.log(typeof d);

//Returns function for a function
function f(){

}
console.log(typeof f);

//Undefined
//Value is undefined, type is Undefined
let x = undefined;
console.log(typeof x);
//Returns Undefined for variable that is not assigned a value
console.log(typeof i);
let j;
console.log(typeof j); 

//Value is "" type is string
let car = "";
console.log(typeof (car));

//Constructor Property
console.log((3).constructor);
console.log([1, 2].constructor);
console.log(function(){

}.constructor);
console.log(new Date().constructor);
//console.log((null).constructor);

//Checking if it array or not using constructor property
let a = [1,2];
function isArray(a){
    return a.constructor === Array;
}
console.log(isArray(a));

//Checking Date
let currentTime = new Date();
function isDate(d){
    return d.constructor === Date;
}
console.log(isDate(currentTime));