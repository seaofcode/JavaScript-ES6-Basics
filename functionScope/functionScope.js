// var, let and const
// define, update, redefine
// const cannot mutate primitive type

// define
var number = 100;
console.log(number);

// update
number = 200;
console.log(number);

// redefine
var number = 'apple';
console.log(number);

// define and update
let amount = 100;
amount = 200;

// cannot redefine let
// let amount = 'amount';

// cannot update or redefine const primitive types
const total = 100;
// total = 200;

// you can mutate properties inside reference types
const person = {name: 'bob'};
person.name = 'john';
console.log(person.name);
// you cannot redefine the actual reference value
// person = 'orange';

// var, let, const
// let, const - blocked scope {} - anything within {}
// var - function scope

// amount1 is global scope
var amount1 = 100;

function greet(){
    // random is local scope
    var random = 'rando value';
    console.log(`hello, there ${amount} ${random}`);
}
// cannot access local var outside of a function
// console.log(random);

greet();

var total1 = 1000;
var test = true;

if(test) {
    // local scope
    var total1 = 'apples and garlic';
    console.log('test is true');
}

