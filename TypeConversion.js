//Implicit conversion

//Implicit Conversion to String
console.log('3' + 2);
console.log('3' + null);
console.log('3' + undefined);
console.log('3' + true);

//Implicit conversion to Numbers
console.log('3' - '2');
console.log('5' - 2);
console.log('5' * '3');
console.log('5' / '2');

//But this will not be converted to numbers as it has "+" and it will treat both as strings and concat 
console.log('3' + '2');

//Implicit Non-numeric Strings to Nan
console.log('Hello' - 'world');
console.log('4' - 'hello');

//Implicit Boolean conversion to Numbers
console.log(true - 1);
console.log(3 + true);
console.log('3' - true);
console.log(3 + false);
console.log(3 - false);

//Implicit conversion of Null to 0 when used with numbers
console.log(99 + null);
console.log(99 - null);

//Implicit conversion of Undefined to NaN with Numbers, Boolean
console.log(3 + undefined);
console.log('3' + undefined);
console.log(3 - undefined);
console.log('3' - undefined);
console.log(true + undefined);
console.log(null + undefined);

//Explicit Conversion

//Convert to Number Explicitly
console.log(Number("123"));
console.log(Number('2e-3'));
//Boolean conversion to Number
console.log(Number(true));
console.log(Number(false));
//Empty String and null returns 0
console.log(Number(""));
console.log(Number(null));
//If a String is invalid it returns NaN
console.log(Number(undefined));
console.log(Number('Hello'));
console.log(Number(NaN));
//Using ParseInt, ParseFloat, unary + operator, Math.floor
console.log(parseInt("76"));
console.log(parseFloat("20.1"));
console.log(+'20.2');
console.log(Math.floor("56.23"))

//Explicit Conversion to String
//String and .toString
console.log(String(123));
console.log(String(2+3));
console.log(String(undefined));
console.log(String(null));
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
//toString
console.log((123).toString());
console.log((true).toString());

//Explicit conversion to Boolean
//false - 0, null, undefined, NaN, ""(without space) gives false
console.log(Boolean(0))
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

//true - Number, " "(with space)
console.log(Boolean(1));
console.log(Boolean('35'));
console.log(Boolean(35));
console.log(Boolean("Hello"));
console.log(Boolean(" "));