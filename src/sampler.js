/* eslint-disable semi */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
function getChild (parent) {
  if (parent === null) throw TypeError()
  return Object.create(parent)
}
let o4 = { x: "don't change this value" }
console.log(o4.x)
let p = getChild(o4)
console.log(p)
o4 = null
// p = getChild(o4)
// console.log(p)
// ---------------------
// let o5 = {}
// console.log(o5)
// o5.x = 100
// console.log(o5)
// o5.y = 1001;
// console.log(o5);
// ---------------------
// p = getChild(o5)
// console.log(p)
// p.y = 200
// let q = getChild(p)
// q.z = 300
// console.log(q)
// console.log('q.x + q.y + q.z' + (q.x + q.y + q.z))
// console.log('p.x + p.y ' + (p.x + p.y))
// console.log('o5.x + o5.y ' + (o5.x + o5.y))
// ---------------------
let book = {
  'main title': 'Java script',
  subtitle: 'Guide to Javascript for beginners',
  for: 'students',
  author: {
    first: 'Suja',
    surname: 'Selvaraj'
  }
}
// let len
// book = null
// if (book) {
//   if (book.subtitles) {
//     len = book.subtitle.length
//     console.log(len)
//   } else { console.log('book.subtitle undefined:') }
// } else { console.log('book is null') }

// len = book && book.subtitle && book.subtitle.length
// if (len) console.log(len)
// console.log(book.author)
// delete book.author
// console.log(book.author)

// console.log(book['main title'])
// delete book['main title']
// console.log(book['main title'])
// ------------------------
let o6 = { x: 100 }
console.log(o6.x);
delete o6.x
console.log(o6.x);
console.log(o6.toString())
delete o6.toString;
console.log(o6.toString())
console.log(o6.toString)

// // not able to delete toString
// member of Object.prototype can't be deleted in Children
// delete Object.prototype
var a = 1
console.log(a);
delete this.a // not deleted
console.log(a);
// global variables are not deleted, function are deleted
function f1 () {}
delete this.f1()
