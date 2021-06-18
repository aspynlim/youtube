import { formData } from './forms';
import { IsPerson } from './interfaces/IsPerson';
import { Payment } from './classes/Payment';
import { HasFormatter } from './interfaces/HasFormatter';
import { Invoice } from './classes/Invoice';

// formData
const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});

const person: any = {};
// console.log(person.speak());

// Interfaces > isPerson
const me: IsPerson = {
  name: 'jay',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}.`);
    return amount;
  }
};

const greetPerson = (person: IsPerson) => {
  console.log(`hello, ${person.name}`);
}
greetPerson(me);

// Interfaces with Classes
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('jen', 'web work', 250);
docTwo = new Payment('joy', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);