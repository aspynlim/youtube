let firstCard = 10;
let secondCard = 31;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let msg = '';

console.log(firstCard, secondCard, sum);


function startGame(){
  if(sum <= 20){
    msg = "Do you want to draw a new card ?";
  } else if(sum === 21) {
    msg = "WIN!";
    hasBlackJack = true;
  } else {
    msg = "Lost...";
    isAlive = false;
  }

  console.log(msg);
  console.log("hasBlackJack", hasBlackJack);
  console.log("isAlive", isAlive);
}
