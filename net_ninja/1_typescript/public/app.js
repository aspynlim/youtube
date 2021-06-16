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
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
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
invOne.client = 'Jeplin';
console.log(invoices);
