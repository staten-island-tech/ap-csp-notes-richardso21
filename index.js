// variables -> storing numbers or text, etc.

// ====
// pre-es6 (var)
// ====
var life = 100; // (;) is necessary for JS to parse code
var name = "Dev Ed"; // quotes denote string (' or ")
// * JS is not strongly typed

console.log(life); // 100
console.log(name); // "Dev Ed"

life = 50;
console.log(life); // 50

life = 100;
life -= 10; // life = life - 10
console.log(life); // 90 (100 - 10 = 90)
life += 100;
console.log(life); // 190 (90 + 100 = 190)

var checkout = false; // booleans
if (checkout) console.log("checked out!"); // won't happen

var box;
console.log(box); // undefined ("we have a variable but no value")

var box_null = null; // null => a value of "nothing"

// ====
// es6 (let & const)
// ====
// * difference in scoping
const life_const = 100;
life_const = 50; // ERROR: cannot be reassigned

const life_const = 50; // ERROR: constant already exists (var allows this flaw)

let life_let = 100;
life_let -= 50; // OK