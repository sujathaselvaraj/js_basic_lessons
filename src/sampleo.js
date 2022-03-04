/* eslint-disable semi */
// ## Number
const age = 100;
const money = 1000.5;
console.log(typeof age);
console.log(typeof money);
console.log('10' * '10');
console.log('10' + '10');
console.log('10' - '3');
console.log('10' / '10');
console.log(Math.round(2.5));
console.log(Math.round(2.2));
console.log(Math.floor(2.6));

console.log(Math.floor(2.4));
console.log(Math.ceil(2.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachkidgets = Math.floor(sweets / kids);
console.log(eachkidgets);
const leftsweets = sweets % kids;
console.log(leftsweets);

let x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3);
console.log(x);
console.log(0.1 + 0.2);
console.log(0.1 + 0.4);
// let costofproduct = 100.95;
// const costOfproduct = 10095; // in paise
console.log(typeof Infinity);
console.log(typeof NaN);

console.log(typeof -Infinity);
const result = 10 / 'hello';
console.log(result);
const a = 100;
let results = Number.isInteger(a);
console.log(`Is x is a number: ${results}`);
const y = 'abcd';
results = Number.isInteger(y);
console.log(`Is y is a number: ${results}`);
results = (typeof y === 'string');
console.log(`is y a String: ${results}`);
const flag = true;
results = (typeof flag === 'boolean');
console.log(`is flag is boolean: ${results}`);
const nos = [1, 2, 3, 4, 5];
results = (typeof nos === 'object');
console.log(`Is nos  an Object: ${results}`);
