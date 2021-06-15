// #3 Type Basics
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
})

let character = 'test';
character = 'jo';

const circ = (diameter: number) => {
  return diameter * Math.PI
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
}

console.log(ninja);


// #5 Explicit Types
let company: string|boolean;
company = 'test';
company = false;
console.log(company);

let ninjas_mixed: (string|number)[] = [];
ninjas_mixed.push('stay');
ninjas_mixed.push(10);
console.log(ninjas_mixed);

let obj: object;
obj = {
  name: 'sam',
  age: 20
}
obj = [20];
console.log(obj);

let obj2: {
  name: string,
  age: number
}
obj2 = {
  name: 'jo',
  age: 30
}
console.log(obj2);


// Dynamic(Any) Types
let age: any = 25;
age = true;
console.log(age);

let mix: any[] = [];
mix.push(true);
mix.push(100);
console.log(mix);


// Function Basics
let greet: Function;

greet = (a: number, b: number, c?: number|string): void => {
  console.log(a);
  console.log(b);
  console.log(c);
}
greet(5, 10);

const minus = (a: number, b: number): number => {
  return a + b;
}
console.log(minus(10, 10));



// Type Aliases
type StringOrNum = string | number;
type objWithName = { name: string, uId: StringOrNum };

let sayHello = (user: objWithName) => {
  console.log(`${user.name} with the ID number '${user.uId}' says "hello".`);
}

sayHello({name: 'jane', uId: 123});


// Function Signatures
let greeting: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}.`);
}

let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
  if(action === 'add'){
    return num1 + num2;
  } else {
    return num1 - num2;
  }
}

let logDetails: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number};

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
}