/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
// function calculateBill (billAmount, taxRate) {
//   console.log(billAmount + '-' + taxRate)
//   const total = (billAmount + billAmount * taxRate);
//   return total;
// }
// let result = calculateBill(100, 0.13);
// console.log(result);
// // variables created inside a function are not available outside the function
// // eslint-disable-next-line prefer-const
// let billtotal = calculateBill(20 + 10 + 50, 0.75);
// console.log(billtotal);
// -------------------------
// function yell (name = 'Silly Goose') {
//   return `HEY ${name.toUpperCase()}`
// }
// let greetings = yell('suja')
// console.log(greetings)
// greetings = yell()
// console.log(greetings)
// -----------------
function calculateBill (billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Runnning calculate Bill!!!');
  console.log('billAmount: ' + billAmount + 'taxRate ' + taxRate + 'taxRate: ' + tipRate)
  const total = billAmount + billAmount * taxRate + billAmount * taxRate
  return total;
}
let result = calculateBill(100);
console.log(result);
result = calculateBill(100, 0.66);
console.log(result);
// Suppose we want to pass the tipRAte
// but not the taxrate and want taxRate to be default then the only thing we can do is

result = calculateBill(100, undefined, 0.66);
console.log(result);
