let events = require('events');
let util = require('util');

let myEmitter = new events.EventEmitter();

// listen out for someEvent event
myEmitter.on('someEvent', (msg) => {
  console.log(msg);
});

// the first argument of the emit function is the event we want to emit, and then the arguments thereafter are whatever we pass to the function of emitter
myEmitter.emit('someEvent', 'the event was emitted');

const Person = function (name) {
  this.name = name;
};

// inherit the event emitter, Person should "inherit" the event emitter, so I can attach custom events to people
util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let ryu = new Person('ryu');
let mary = new Person('mary');

let people = [james, mary, ryu];
people.forEach((person) =>
  person.on('speak', (msg) => console.log(`${person.name} said ${msg}`))
);

james.emit('speak', 'hey dude');
ryu.emit('speak', 'I want a curry');
