/* eslint-disable no-unused-vars */
/* eslint-disable semi */

// function doctorize (firstname) {
//   return `Dr. ${firstname}`
// }
// thes are `'hoisted'` meaning javaScript 'hoists' or puts them at the top of the file.
// so if we try to run a function
// that is define with the "function" keyword before it is defined (above its definition),
// then there's no error and the function is excecuted successfully

// Anon Function
// function (firstname) {
//     return `Dr .${firstname}`;
// }
// Function Expression
const doctorize = function (firstname) {
  return `Dr .${firstname}`;
}
const doc = doctorize('Ajitha');
console.log(doc);

// These are **not hoised** , meaning JavaScript doesn't put them at the top of the title
// so if a function is not defined with the function keyword, can't be hoisted

// -----------------------

// ** Arrow Function**
// const inchToCM = inches => {
//   console.log(inches);
//   return inches * 2.54;
// };
// const resultcm = inchToCM(10);
// console.log(resultcm);

const funcA = () => {
  console.log('Hi');
};
funcA();

const add = (a, b = 3) => a + b;
const inTocm = inches => inches * 2.54;
console.log(add(100));
console.log(inTocm(25));

// -------------------------------------
const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0 });
const person = makeAPerson('Sujatha', 'Selvaraj');
console.log(person);

(function (age) {
  console.log(`you are cool and your age is ${age}`);
})(10);

// -------------------
const employee = {
  name: 'suja selvaraj',
  // method
  sayHi: function () {
    console.log(`Hi !!! ${this.name}`);
    return ` Hi ${this.name}`;
  },
  // Arrow function
  print: () => {
    console.log('Hello employee');
  },
  // Short hand Method
  yellHi () {
    console.log(`HI ${this.name.toUpperCase()}`);
  }
};
employee.sayHi();
employee.print();
employee.yellHi();
