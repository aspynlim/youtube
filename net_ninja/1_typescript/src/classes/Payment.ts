import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  constructor(
    private recipient: string,
    readonly details: string,
    public amount: number
  ){}

  format(){
    // this.details = 'test';
    return `${this.recipient} is owed $${this.amount} for ${this.details}!`
  }
}