// normal function statement
function sayHi() {
  console.log('hi');
}
// function expressions
let sayBye = function () {
  console.log('bye');
};
// function arrow
let sayHello = (name) => {
  console.log(`Hello ${name}`);
};
sayHi();
sayBye();
sayHello('Gigi');

function callFunction(func) {
  func();
}

callFunction(sayBye); // bye
