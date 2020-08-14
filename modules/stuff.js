const counter = (arr) => `There are ${arr.length} elements in the array`;
const adder = (a, b) => `The sum of the twon numbers is ${a + b}`;
const PI = 3.14;

// at the beginning module.exports is just an empty object
module.exports = { counter, adder, PI };

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.PI = PI;
