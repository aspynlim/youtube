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