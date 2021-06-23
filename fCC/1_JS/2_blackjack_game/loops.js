let colors = ['Hello,', 'my name', 'is', '"kelly".'];
let greetingEl = document.getElementById('greeting-el');
let display = '';

for(let i = 0; i < colors.length; i ++){
  greetingEl.textContent += colors[i] + " ";
}

let time1 = 102;
let time2 = 107;

function getFastest() {
  let totalTime = time1 + time2;
  return totalTime;
}

let fastest = getFastest();
console.log(fastest);