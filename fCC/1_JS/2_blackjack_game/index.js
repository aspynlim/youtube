let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let msg = '';
let messageEl = document.querySelector('#message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');

console.log(firstCard, secondCard, sum);

function startGame(){
  sumEl.textContent = `Sum : ${sum}`;
  cardsEl.textContent = `Cards : ${firstCard} ${secondCard}`;

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
  console.log(`new card!`);
}

