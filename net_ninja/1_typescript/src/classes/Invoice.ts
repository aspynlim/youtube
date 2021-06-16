import { HasFormatter } from "../interfaces/HasFormatter"
export class Invoice implements HasFormatter {
  // private client: string;
  // readonly details: string;
  // amount: number;

  // constructor(c: string, d: string, a: number){
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  constructor(
    private client: string,
    readonly details: string,
    public amount: number
  ){}

  format(){
    // this.details = 'test';
    return `${this.client} owes $${this.amount} for ${this.details}!`
  }
}