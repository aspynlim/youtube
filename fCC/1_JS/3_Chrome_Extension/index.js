let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let lead of myLeads) {
    // Use "Template String"
    listItems += `
      <li>
        <a href="${lead}" target="_blank">${lead}</a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}

// Uncaught TypeError: Assignment to constant variable.
// inputEl = 'test';

// for(let lead of myLeads){
//   const li = document.createElement("li");
//   li.textContent = lead;
//   ulEl.append(li);
// }
