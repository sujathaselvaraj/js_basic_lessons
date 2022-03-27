const names = ['John', 'Sam', 'Peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length-1]);

/*
what is the output for the above
names is an aray of strings
length is a property of array
it returns a number
the lower bound of an array is 0(zero)
the upper bound of the array is length-1;
 The index for John is 0
 The index for Sam is 1
 The index for Peter is 2
 */

// methods of Array

names.push('Suresh');
console.log('After push: '+ names);

// push will add the items at end

// ...is called as the spread operator
// it represents the entire items in the array
const names2 = [...names, 'Raj'];
console.log('names2: ' + names2);
names.unshift('poppy');
console.log('unshift:' + names);
// unshift add the item at the beginning
// so the index value of rest value is changed



const names3 = ['raj', ...names];
console.log(names3);
// this will add the data at the beginning
// Now next method slice()
//create a new array

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata', 'RE'];
const b1 = [...bikes.slice(0, 2)];
console.log(b1);
// slice takes 2 parameters
// from , to
// it has copied 2 values from index 0 and assigned to b1

const b2 = [...bikes.slice(2)];
console.log(b2);
// from 2nd index to last value

const newBikes = [
    ...bikes.slice(0, 2),
    'benotto',
    ...bikes.slice(2)
];
console.log('newBikes: ' + newBikes);
// new array called newBikes is created.
// then from index 0 twoo values are copied
// then benotto is copied
//  thrn the value from index 2 to last index is copied

const newBikes2 = [
    ...bikes.slice(0, 2),
    ...bikes.slice(4)
];
console.log('newBikes2: ' + newBikes2);
// new array called newBikes2 is created.
// then from index 0 twoo values are copied
//  then the value from index 4 to last index is copied

const indexOfSam = names.findIndex(nam => nam === 'Sam');
console.log('IndexOfSAM: ' + indexOfSam);

// function to delete a name form the array

function deleteName( namestodelete, names) {
    const indexOfname = names.findIndex(nam => nam === namestodelete)
    index = indexOfname + 1;
    const newArray = [
        ...names.slice(0, indexOfname),
        ...names.slice(index)
    ];
    return newArray;

}
 const deletedNames = deleteName('Peter', names);
console.log('After deletion' + deletedNames);
console.log('Before deletion' + names);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Before deletion: ' + numbers);
// numbers.splice(3, 2);
// (method) Array<numbers>.splice(start: number, deleteCOunt?: number)
// Mutation Method - modifies / deletes the value in the source array
// from the 3rd index delete the next 2 values
// console.log('After deletion: ' + numbers)
const pizzaSlice = numbers.slice(2, 4); // start and end index
// (method) Array<number>.slice(start?: number, end?: number);
// Immutable method - does not changes the values
console.log('pizzaSlice : ' + pizzaSlice);
console.log('Original Numbers: ' + numbers);
const numbersReversed = [...numbers].reverse();
console.log(numbersReversed);



