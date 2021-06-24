const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name) {
  welcomeEl.textContent = `${greeting}, ${name}`;
}
greetUser("Howdy", "JEn");

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 4));

function getFirst(arr) {
  return arr[0];
}
console.log(getFirst([1, 2, 3]));
