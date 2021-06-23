const learnEl = document.querySelector('#learn-el');
learnEl.innerHTML = `<button>BUY</button>`;

learnEl.addEventListener('click', () => {
  learnEl.innerHTML += `<p>Thank you for buying!</p>`;
});