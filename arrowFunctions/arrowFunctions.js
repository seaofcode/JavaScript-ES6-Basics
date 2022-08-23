// Arrow Functions 
// no name, always an expression, assign to a variable
// no function keyword
// treats 'this' differently

// prev versions
function sayHi(){
    console.log("Hello");
}
sayHi();

const hello = function(name){
    console.log(`Hello ${name}`);
};
hello("Geno");

function triple(val1, val2){
    return val1 * val2 * 3;
}


// arrow versions ES6+
// no parameter
const sayHello = () => console.log('Hello');
sayHello();

// one parameter
const double = value => value * 2;
const num = double(4);
console.log(num);

// two parameters and more than one line
const multiply = (num1, num2) => {
    const result = num1 * num2;
    // more code here
    return result;
};

const sum = multiply(4, 5);
console.log(sum);

// return an object
const object = () => ({name:'dan', age:25});
const person = object();
console.log(person);

// arrow functions as callback functions
const numbers = [1,2,3,4,5,6];
const big = numbers.filter(number => number > 2);
console.log(big);

const btn = document.querySelector(".btn01");
btn.addEventListener("click", () => console.log('you clicked me'));


// reg function : 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

// reg function
const bob = {
    firstName: "bob",
    lastName: "sanders",
    sayName: function(){
        console.log(this);
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    },
};
bob.sayName();

// arrow function
const dan = {
    firstName: "dan",
    lastName: "smith",
    sayName: function(){
        console.log(this);
        setTimeout(() => {
            console.log(this);
            console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
        }, 2000);
    },
};
dan.sayName();



