import { Invoice } from "./classes/Invoice.js";

// #11 The DOM & Type Casting

// "!" : we're 100% sure that there is no null value.
const anchor = document.querySelector('a')!;
console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
});


// #12 Classes
// #13 Access Modifiers 
/*
   private : cannot access it outside of the class + cannot change the value
   readonly : can access it outside of the class + cannnot change the value
*/

const invOne = new Invoice('Jen', 'work on the website', 1000);
const invTwo = new Invoice('Mario', 'work on the website', 500);
console.log(invOne , invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

// "public" property 이기 때문에 수정 가능
// invOne.client = 'Jeplin';

console.log(invoices);

invoices.forEach(inv => {
  // inv.client = 'change';
  console.log(inv.details, inv.amount, inv.format());
});