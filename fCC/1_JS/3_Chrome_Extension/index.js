let myLeads = ['red', 'blue'];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.querySelector('#ul-el');

// Uncaught TypeError: Assignment to constant variable.
// inputEl = 'test';

inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for(let lead of myLeads){
  const li = document.createElement("li");
  li.textContent = lead;
  ulEl.append(li);
}

for(let lead of myLeads){
  ulEl.innerHTML += `<li> ${lead} </li>`;
}