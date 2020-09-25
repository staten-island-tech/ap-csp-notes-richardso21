// Creating arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// array length
val = numbers.length;
// check if array
val = Array.isArray(numbers);
// index values
val = numbers[3];
val = numbers[0];
// replacing things in array
numbers[2] = 100;
// find index of value
numbers.indexOf(43); // 0

// mutating arrays
// add to end
numbers.push(250);
// add to front
numbers.unshift(120);
// take off from end
numbers.pop();
// take off from front
numbers.shift();
// splice values
numbers.splice(1, 3); // removes values with indexes from 1 to 3 (inclusive)
// self-explanatory
numbers.reverse()

// combining two arrays
val = numbers.concat(numbers2);

// only sorts the numbers based on first digit
val = numbers.sort()

// use a compare function that returns the difference b/w two values
// if it returns negative, it expects that x is less than y
val = numbers.sort((x, y) => {
  return x - y;
})

// you can reverse sort by switching y and x in the return expression
val = numbers.sort((x, y) => {
  return y - x;
})

// pass function to find first number in array that satisfies condition
val = numbers.find((n) => {
  return n < 50; 
}) // 43