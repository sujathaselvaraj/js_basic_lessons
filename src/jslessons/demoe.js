/* eslint-disable semi */
class Pizza {
// constructor
  constructor (toppings = [], customer) {
    this.toppings = toppings;
    this.customers = customer;
  }

  // static property
  static extraToppings = ['pepperoni', 'cheese'];
 // static method
 static sayThankyou() {
     console.log('Thank You!!!!');
 }
 // instance property
 slices = 10;

 get noOfSlices() {
     return this.slices;
 }
 set noOfSlices(value) {
     this.slices = value;
    // slices = value;
 }
  eat () {
    console.log(this.toppings);
    console.log(this.customer);
  }
  // instance method
  getCokeorPepsi = () => {
      console.log('Coke');
      console.log('Pepsi');
      console.log(this);
  }
  // private Fields can only be modified inside a class
  #bankBalance = 10000;

  get balance() {
      return this.#bankBalance;
  }
  set balance(value) {
      this.#bankBalance = value;
  }
}
const myLunch = new Pizza(['onion', 'tomato', 'mushroom', 'capcicum'], 'Sujatha');
// console.log(myLunch);
// myLunch.eat();
// myLunch.toppings = ['carrot', 'Almonds', 'Lobster']
// console.log(myLunch.toppings);
// console.log(Pizza.extraToppings);
// Pizza.extraToppings = ['onions', 'Lettuce'];
// console.log(Pizza.extraToppings);
// Pizza.sayThankyou();
// console.log( myLunch.noOfSlices);
// myLunch.noOfSlices = 6;
// console.log( myLunch.noOfSlices);
// myLunch.getCokeorPepsi();
// myLunch.slices = 12;
// console.log( myLunch.noOfSlices);
console.log(myLunch.balance);
myLunch.balance = 5000;
console.log(myLunch.balance);
// smyLunch.#bankBalance = 2000;
console.log(myLunch.balance);

