let firstCard = 10;
let secondCard = 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let msg = '';
let messageEl = document.querySelector('#message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');

console.log(firstCard, secondCard, sum);

let nums = [];
nums.push(firstCard);
nums.push(secondCard);

function startGame(){
  sumEl.textContent = `Sum : ${sum}`;
  cardsEl.textContent = `Cards : ${[...nums]}`;

  if(sum <= 20){
    msg = "Do you want to draw a new card ?";
  } else if(sum === 21) {
    msg = "WIN!";
    hasBlackJack = true;
  } else {
    msg = "Lost...";
    isAlive = false;
  }

  messageEl.textContent = msg;
  console.log("hasBlackJack", hasBlackJack);
  console.log("isAlive", isAlive);
}

function newCard(){
  let newCard = 3;
  nums.push(newCard);
  sum += newCard;
  startGame();
}

