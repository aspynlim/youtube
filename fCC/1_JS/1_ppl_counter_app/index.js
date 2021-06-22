let count = 0;

let num = document.getElementById('count-el');
let btn = document.getElementById('increment-btn');

function save() {
  console.log(count);
}

function increment(){
  btn.addEventListener('click', () => {
    count += 1;
    // num.textContent = count;
    num.innerText = count;
  });
}

increment();