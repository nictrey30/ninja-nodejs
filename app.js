// setTimeout(() => {
//   console.log('Hey ninjas!');
// }, 1000);

// let time = 10;
// const timeBomb = setInterval(() => {
//   if (time === 0) {
//     console.log('BOMB EXPLODED! KaBOOMMM');
//     clearInterval(timeBomb);
//   } else {
//     console.log(`${time}s remaining until bomb explodes`);
//     time -= 1;
//   }
// }, 1000);

// node can tell us where we are
// console.log(__dirname);
// console.log(__filename);

const stuff = require('./modules/stuff');
console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(7, stuff.PI));
