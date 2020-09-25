// objects
const user = {
  // properties are contained within objects
  name: "Edwin",
  // properties are separated with commas
  age: 24,
  married: false,
  purchases: ["phone", "car", "laptop"],
  // the property values could be arrays, bools, numbers, etc.
};

console.log(user.purchases); // `["phone", "car", "laptop"]`

console.log(this); // Window object (browser) || module.exports (node.js)

function apples() {
  console.log("apple");
}

apples(); // "apple"
this.apples(); // "apple"
window.apples(); // "apple"

const updated_user = {
  name: "Edwin",
  age: 24,
  married: false,
  purchases: ["phone", "car", "laptop"],

  sayName() {
    console.log(this.name);
    // `this.name` refers to `updated_user.name`
  }
  // note: cannot use arrow functions!
}

updated_user.sayName(); // "Edwin"