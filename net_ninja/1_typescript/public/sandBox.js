"use strict";
// #3 Type Basics
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
let character = 'test';
character = 'jo';
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(100));
// #4 Object & Arrays
let names = ['purple', 'apple'];
names.push('test');
console.log(names);
let mixed = [20, 'test'];
mixed.push(30);
console.log(mixed);
let ninja = {
    name: 'mario',
    age: 20,
    skills: ['skiing', 'driving']
};
console.log(ninja);
// #5 Explicit Types
let company;
company = 'test';
company = false;
console.log(company);
let ninjas_mixed = [];
ninjas_mixed.push('stay');
ninjas_mixed.push(10);
console.log(ninjas_mixed);
let obj;
obj = {
    name: 'sam',
    age: 20
};
obj = [20];
console.log(obj);
let obj2;
obj2 = {
    name: 'jo',
    age: 30
};
console.log(obj2);
// Dynamic(Any) Types
let age = 25;
age = true;
console.log(age);
let mix = [];
mix.push(true);
mix.push(100);
console.log(mix);
// Function Basics
let greet;
greet = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
};
greet(5, 10);
const minus = (a, b) => {
    return a + b;
};
console.log(minus(10, 10));
let sayHello = (user) => {
    console.log(`${user.name} with the ID number '${user.uId}' says "hello".`);
};
sayHello({ name: 'jane', uId: 123 });
// Function Signatures
let greeting;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}.`);
};
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
