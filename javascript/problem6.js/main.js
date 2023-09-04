// import { calculateTax , taxRate } from "./taxUtils";

// const price = 100;
// const taxAmount = calculateTax(price);

// console.log('the tax amount for a price of $${price} is $$ {taxAmount}');
// console.log('the tax rate is ${taxRate}');

// main.js
import { calculateTax, taxRate } from './taxUtils.js';

const itemPrice = 100;
const taxAmount = calculateTax(itemPrice);

console.log(`Item price: $${itemPrice}`);
console.log(`Tax rate: ${taxRate * 100}%`);
console.log(`Tax amount: $${taxAmount}`);
console.log(`Total price including tax: $${itemPrice + taxAmount}`);
