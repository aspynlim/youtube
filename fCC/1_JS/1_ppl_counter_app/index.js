let count = 0;
let btn = document.getElementById('increment-btn');
let countEl = document.getElementById('count-el');
let saveEl = document.querySelector('#save-el');

function increment(){
  btn.addEventListener('click', () => {
    count += 1;
    // countEl.innerText = count;
    countEl.textContent = count;
  });
}

function save() {
  let countStr = ` ${count} - `;
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

increment();