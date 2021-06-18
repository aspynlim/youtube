import { Invoice } from "./classes/Invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/Payment";
import { HasFormatter } from "./interfaces/HasFormatter";

const anchor = document.querySelector('a')!;
console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!; // This will be definitely found in the page.
const list = new ListTemplate(ul);

form.addEventListener('submit', (e) => {
  console.log(type.value);
  e.preventDefault();

  let doc: HasFormatter;

  if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end');
});


// Generics
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}
let docOne = addUID({name: 'jen', age: 30});
console.log(docOne.name); // ERROR : Property 'name' does not exist on type