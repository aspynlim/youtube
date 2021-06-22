// EXERCISE 1
let firstName = 'Jen';
let lastName = 'Lim';
let fullName = `${lastName}, ${firstName}`;
console.log(fullName);


// EXERCISE 2
let name = 'Linda';
let hello = 'Hi there';

function greetings() {
  console.log(`"${hello}, ${name}!"`);
}

greetings();


// EXERCISE 3
let myPoints = 3;

function add3Points() {
  myPoints += 3;
}
function removePoint() {
  myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
removePoint();
removePoint();

console.log(myPoints);


// EXERCISE 4
console.log("2" + 2); // 22
console.log(11 + 7); // 18
console.log(6 + "5"); // 65
console.log("my points: " + 5 + 9); // my points: 59


// EXERCISE 5
let nikeBtn = document.querySelector('#nike-btn');
let errorMsg = document.querySelector('#error');

nikeBtn.addEventListener('click', () => {
  errorMsg.textContent = 'Something went wrong. Please try again!';
});


// EXERCISE 6
let num1 = 8;
let num2 = 2;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

let addBtn = document.querySelector('#add-btn');
let subtractBtn = document.querySelector('#subtract-btn');
let divideBtn = document.querySelector('#divide-btn');
let multiplyBtn = document.querySelector('#multiply-btn');
let sum = document.querySelector('#sum-el');

function add(){
  let add = num1 + num2;
  sum.textContent = `SUM: ${add}`;
}

function subtract(){
  let subtract = num1 - num2;
  sum.textContent = `SUM: ${subtract}`;
}

function divide(){
  let divide = num1 / num2;
  sum.textContent = `SUM: ${divide}`;
}

function multiply(){
  let multiply = num1 * num2;
  sum.textContent = `SUM: ${multiply}`;
}