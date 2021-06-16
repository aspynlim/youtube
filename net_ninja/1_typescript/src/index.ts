import { formData } from './forms';
import { IsPerson } from './interfaces/isPerson';

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