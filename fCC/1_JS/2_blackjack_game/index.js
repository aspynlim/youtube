let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let msg = '';
let messageEl = document.querySelector('#message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');

let player = {
  name: "Jen",
  chips: 134,
};
let playerEl = document.querySelector('#player-el');
playerEl.textContent = `${player.name} : ${player['chips']}`;

// Functions => 'hoisting' 발생
function getRandomCard(){
  let randomNum = Math.ceil(Math.random() * 13);
  console.log(randomNum);

  if(randomNum === 1){
    return 10;
  } else if(randomNum >= 11) {
    return 11;
  } else {
    return randomNum;
  }
}

function renderGame(){
  sumEl.textContent = `Sum : ${sum}`;

  // cardsEl.textContent = `Cards : ${[...cards]}`;
  cardsEl.textContent = 'Cards: ';
  for(let card of cards){
    cardsEl.textContent += card + " ";
  }

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
}

function startGame(){
  isAlive = true;
  
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function newCard(){
  if(isAlive && !hasBlackJack){
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  }
}
