// #1 let vs const
const player = "jen";
const opponent = "nick";
const game = "tick-tok";
let points = 0;
let hasWon = false;

points += 10;
hasWon = true;

if (hasWon) {
  console.log(`${player}, you won!`);
} else {
  console.log(`${player}, you lost ...`);
}

// #2 Log items in an array
let colors = ["red", "yellow", "blue"];

function display(arr) {
  for (let element of arr) {
    console.log(element);
  }
}

display(colors);

// #3 localStorage
let testArr = ["red", "blue"];
localStorage.setItem("myCredits", JSON.stringify(testArr));
console.log("1", localStorage);

let myCredits = localStorage.getItem("myCredits");
console.log("2", myCredits);

// #4 addEventListener & Object in an array
let data = [
  {
    player: "jane",
    score: 52,
  },
  {
    player: "mark",
    score: 41,
  },
];

let scoreBtn = document.querySelector("#score-btn");
scoreBtn.addEventListener("click", () => {
  console.log(data[0].score);
});

// #5 Generate Sentence
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} is/are`;

  let firstEl = arr[0];
  let lastEl = arr[arr.length - 1];

  for (let el of arr) {
    if (el === lastEl) {
      baseString += `${el}.`;
    } else if (el === firstEl) {
      baseString += ` ${el}, `;
    } else {
      baseString += `${el}, `;
    }
  }
  console.log(baseString);
}

generateSentence("best fruits", ["apples", "oranges", "grapes"]);

// #6 Render Images
const imgs = ["images/hip1.jpg", "images/hip2.jpg"];
const container = document.getElementById("container");

function render() {
  let listItems = "";
  for (let img of imgs) {
    listItems += `
      <img src="./${img}" alt="profile-photo" class="team-img" />
    `;
  }
  container.innerHTML = listItems;
}

render();
