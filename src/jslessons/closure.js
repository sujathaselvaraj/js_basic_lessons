/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
function doSomeTask () {
  const x = 100;
  const y = 20;
// console.log('x: ' + x + ' y: ' + y);
}
doSomeTask();
// console.log('completed');

function outer () {
  const outerVar = 'Hey I am the outer var!';
  // console.log(outerVar);
  function inner () {
    const innerVar = 'Hey I am the inner var!';
    console.log(innerVar);
    console.log(outerVar); // closure - captured variable
  }
  // console.log(innerVar);   // Uncaught ReferenceError: innerVar is not defined
  // inner();  // CALL TO INNER() FROM OUTER() working
  return inner;
}
// outer();
/// inner();
// outer.inner();
let innerFunc = outer();
innerFunc();
innerFunc = null;
// --------------------------
function createGreeting (greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  }
}
const sayHello = createGreeting('hello');
const sayVanakkam = createGreeting('vanakkam');
console.log(sayHello('suja'));
console.log(sayVanakkam('Ajitha'));
console.log(sayVanakkam('Sujatha'));

function createGame (gameName) {
  let score = 0;
  return function win () {
    score++;
    return `Your name ${gameName} score is ${score}`;
  }
}
// ---------------------------------
const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());

console.log(soccerGame());
// let one = win();
// console.log(one(9));
