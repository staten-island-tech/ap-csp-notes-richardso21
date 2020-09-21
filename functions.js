// Functions w/ arguments
function calculateBill(bill, taxRate) {
  // b/w the parantheses (^) are the parameters the function expects
  return bill * (1 + taxRate);
  // use the parameters to perform operations
}

// pass in arguments/parameters when calling the function below
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.15);
console.log(myTotal, myTotal2);
// function output changes as parameters change

const test_bill = 100;
const test_rate = 0.2;
console.log(calculateBill(test_bill, test_rate));
// you can pass in variables as function parameters

const outer_scope_test = "wes";
function outer_sayHiTo() {
  return `Hello ${outer_scope_test}`;
}
console.log(outer_sayHiTo());
// be careful with accidently referencing outer-scope variables in functions
// function will nonetheless still work ==> 'Hello wes'

// instead, always define a parameter for an object that'll be variable
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
console.log(sayHiTo("Richard"));
// works like a charm ==> 'Hello Richard'
console.log(sayHiTo());
// yields 'Hello undefined'; you did not define the `firstName` variable
// the variable is initialized before assignment, so there's no error

const h = 100;
const myTotal3 = calculateBill(h + 30, 0.13);
console.log(myTotal3);
// This will still work. Expressions (h => 100; 100 + 30 => 130)
// will be evaluated before assignment.

// the functions below will not experience an error, despite both using `name`
// each respective `name` variable is in their call stack
function doctorize(name) {
  return `Dr. ${name}`;
}
function yell(name = "silly goose") {
  return `HEY ${name.toUpperCase()}`;
}
// here (^) the yell function has a default value for `name` set ('silly goose')
// when the function is called without any parameters, the function will assume
// the input is 'silly goose'

console.log(yell("richard")); // => 'HEY RICHARD'
// note that the .toUpperCase() method works with what I inputted

console.log(yell()); // => 'HEY SILLY GOOSE'

function calculateFancyBill(bill = 100, taxRate = 0.13, tipRate = 0.15) {
  return bill * (1 + taxRate) * (1 + tipRate);
}
const myTotal4 = calculateFancyBill(120, undefined, 0.2);
// (^) In order to accept the default in a function with multiple parameters,
// pass in undefined at the relative place. 
