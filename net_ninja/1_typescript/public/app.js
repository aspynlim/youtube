"use strict";
// #11 The DOM & Type Casting
// "!" : we're 100% sure that there is no null value.
var anchor = document.querySelector('a');
console.log(anchor.href);
var form = document.querySelector('.new-item-form');
console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// #12 Classes
// #13 Access Modifiers 
/*
   private : cannot access it outside of the class + cannot change the value
   readonly : can access it outside of the class + cannnot change the value
*/
var Invoice = /** @class */ (function () {
    // private client: string;
    // readonly details: string;
    // amount: number;
    // constructor(c: string, d: string, a: number){
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.details = 'test';
        return this.client + " owes $" + this.amount + " for " + this.details + ".";
    };
    return Invoice;
}());
var invOne = new Invoice('Jen', 'work on the website', 1000);
var invTwo = new Invoice('Mario', 'work on the website', 500);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// "public" property 이기 때문에 수정 가능
// invOne.client = 'Jeplin';
console.log(invoices);
invoices.forEach(function (inv) {
    // inv.client = 'change';
    console.log(inv.details, inv.amount, inv.format());
});
