// #3 Type Basics
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var character = 'test';
character = 'jo';
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(100));
// #4 Object & Arrays
var names = ['purple', 'apple'];
names.push('test');
console.log(names);
var mixed = [20, 'test'];
mixed.push(30);
console.log(mixed);
var ninja = {
    name: 'mario',
    age: 20,
    skills: ['skiing', 'driving']
};
console.log(ninja);
// #5 Explicit Types
var company;
company = 'test';
company = false;
console.log(company);
var ninjas_mixed = [];
ninjas_mixed.push('stay');
ninjas_mixed.push(10);
console.log(ninjas_mixed);
var obj;
obj = {
    name: 'sam',
    age: 20
};
obj = [20];
console.log(obj);
var obj2;
obj2 = {
    name: 'jo',
    age: 30
};
console.log(obj2);
// Dynamic(Any) Types
var age = 25;
age = true;
console.log(age);
var mix = [];
mix.push(true);
mix.push(100);
console.log(mix);
