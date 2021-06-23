// #1 Objects & functions
let person = {
  name: "Jen",
  age: 30,
  country: 'Korea'
}

function logData(){
  let statement = `${person.name} is ${person.age} years old and lives in ${person.country}.`;
  return statement;
}

console.log(logData());


// #2 if else
let age = -13;

if(age > 0 && age < 6){
  console.log('FREE');
} else if(age >= 6 && age <= 17){
  console.log('Child');
} else if(age < 0){
  console.log('Not yet born');
} else {
  console.log('others');
}


// #3 Loops
let countries = ['china', 'korea', 'chile'];
console.log([...countries]);

for(let country of countries){
  console.log(country);
}

for(let i=0; i<countries.length; i++){
  console.log(countries[i]);
}


// #4 push, pop, unshift, shift challenge
countries.pop();
console.log(countries); // remove the last element

countries.shift();
console.log(countries); // remove the first element

countries.push('BLACK');
console.log(countries); // add an element as the last one

countries.unshift('STAR');
console.log(countries); // add an element as the last one


// #5 Logical Operators
let dayOfMonth = 13;
let weekday = 'Friday';

if(dayOfMonth === 13 && weekday === 'Friday'){
  console.log('Oh, no!');
}


// #6 Rock papers scissors
let hands = ['rock', 'paper', 'scissor'];

function myTry(){
  let index = Math.floor(Math.random() * 3);
  console.log(hands[index]);
}
myTry();


// #7 Sorting Fruits
let fruits = ['red1', 'orange1', 'red2', 'orange2', 'orange3'];
let appleShelf = document.querySelector('#apple-shelf');
let orangeShelf = document.querySelector('#orange-shelf');

function sortFruits(){
  for(let fruit of fruits){
    if(fruit.includes('red')){
      appleShelf.textContent += `${fruit} `;
    } else if(fruit.includes('orange')){
      orangeShelf.textContent += `${fruit} `;
    }
  }
}

sortFruits();