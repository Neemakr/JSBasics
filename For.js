//For in:
const person = {fname:"John", lname:"Doe", age:25};
for(let x in person){
    console.log(person[x]);
}

//For of:
const cars = ["BMW", "Volvo", "Mini"];
for(let a of cars){
    console.log(a);
}

/*For Each: 
array.forEach(function(currentValue, index, arr))
Here,

function(currentValue, index, arr) - a function to be run for each element of an array
currentValue - the value of an array
index (optional) - the index of the current element
arr (optional) - the array of the current elements */
let students = ['John', 'Sara', 'Jack'];
students.forEach(MyFunction);
function MyFunction(value){
    console.log(value);
}

//Using all three parameters
let students1 = ['John', 'Sara', 'Jack'];
students1.forEach(myFunction);
function myFunction(value, index, arr){
    arr[index] = "Hello" + " " + value;
}
console.log(students1);

let a = ['a', 'b', 'c', 'd'];
a.forEach(function(item){
    console.log(item);
});

const student = {
    name: 'Monica',
    class: 7,
    age: 12
}
for(let key in student){
    console.log(key + " " + "=>" + " " + student[key]);
}