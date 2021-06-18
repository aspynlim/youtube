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
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}
let docOne = addUID({name: 'jen', age: 30});
console.log(docOne.name); // jen

// Enum
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

// Generics with an interface
interface Resource<T> {
  uId: number;
  resourceType: ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uId: 1,
  resourceType: ResourceType.AUTHOR,
  data: {color : 'black'}
}

const docFour: Resource<string[]> = {
  uId: 2,
  resourceType: ResourceType.PERSON,
  data: ['red', 'blue']
}

console.log(docThree, docFour);