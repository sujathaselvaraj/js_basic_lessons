/* eslint-disable prefer-regex-literals */
/* eslint-disable no-new-object */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-control-regex */
/* eslint-disable no-new-func */
/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-var */
var cody = new Object();
cody.living = true;
cody.age = 33;
cody.gender = 'female';
cody.getGender = function () {
  return cody.gender;
};
console.log(cody.getGender());
console.log(cody);
const myObject = new Object();
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject);

const myString = new String('foo');
console.log(myString);

const Person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () {
    return this.gender;
  };
};
const smith = new Person(true, 33, 'male');
console.log(smith);

const myNumber = new Number(23);
const myStrings = new String('male');
const myBoolean = new Boolean(false);
const myObjects = new Object();
const myArray = new Array('foo', 'bar');
const myFunction = new Function('x', 'y', 'return x+y');
const myDate = new Date();
const myRegExp = new RegExp('\bt[a-z]+\b');
const myError = new Error('sorry');
console.log(myNumber.constructor);
console.log(myStrings.constructor);
console.log(myBoolean.constructor);
console.log(myObjects.constructor);
console.log(myArray.constructor);
console.log(myFunction.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myError.constructor);
