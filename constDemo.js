const PI = 3.141592653589793;
//PI = 3.14;      // This will give an error
//PI = PI + 10;   // This will also give an error

//const variables must be assigned a value when they are declared:
const P = 3.14; //correct
//const p;
p = 3.14// Cannot do 

//Constant Array:
//You can change the elements of a constant array:
const a = ["Saab", "Volvo", "BMW"];
a[0] = 'MG';
console.log(a);
a.push('Benz')
console.log(a);

//But you can NOT reassign the array:
//const cars = ["Saab", "Volvo", "BMW"];
//cars = ["Toyota", "Volvo", "Audi"]; 

//Constant Objects
//You can change the properties of a constant object:
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
console.log(car);
// You can add a property:
car.owner = "Johnson";
console.log(car);