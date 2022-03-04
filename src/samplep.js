const person = {
  first: 'Suja',
  last: 'Selvaraj',
  age: 100
}
console.log(person.first)
console.log(person.last)
console.log(person.age)
person.first = 'Tom'
person.last = 'Jerry'
console.log(person.first)
console.log(person.last)
person.last = null
console.log(person.last)
const empty = {}
console.log(typeof empty)
const point = { x: 10, y: 50 }
const point1 = { x: point.x, y: point.y + 1 }
console.log(point1.y)
const book = {
  'main title': 'Java script',
  'sub-title': 'Guide to Javascript for beginners',
  for: 'students',
  author: {
    first: 'Suja',
    last: 'Selvaraj'
  }
}
console.log(book['main title'])
console.log(book['sub-title'])
console.log(book.for)
console.log(book.author.first)
console.log(book.author.last)
// console.log(book.sub - title)
// console.log(book.for)
