/*
* Orientado a funciones.
* No se debe alterar el valor de las variables globales dentro de estas.
* Crear un nuevo objeto y trabajar en este.
*/

/* Mutable */
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');         // inserts at index 1
console.log(months);                // expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');         // replaces 1 element at index 4
console.log(months);                // expected output: Array ["Jan", "Feb", "March", "April", "May"]

/* No mutable */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));      // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));   // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));   // expected output: Array ["bison", "camel", "duck", "elephant"]


const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

/* No mutable */
[1, 2, 3].concat([4, 5, 6]);        // Returns a new array [1, 2, 3, 4, 5, 6]

/* Return a single value */
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));        // 1 + 2 + 3 + 4
// expected output: 10

console.log(array1.reduce(reducer, 5));     // 5 + 1 + 2 + 3 + 4
// expected output: 15

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});

/* Order | Mutable original Array */
[8, 4, 5, 2, 1].sort()          // [1, 2, 4, 5, 8]

const ascendingOrder = arr => {
    return arr.sort((a, b) => a - b)
}
ascendingOrder([1, 5, 2, 3, 4]);    // Returns [1, 2, 3, 4, 5]

const reverseAlpha = arr => {
    return arr.sort((a, b) => a === b ? 0 : a < b ? 1 : -1);
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);    // Returns ['z', 's', 'l', 'h', 'b']

/* Split */
var str = "Hello World";
var bySpace = str.split(" ");           // Sets bySpace to ["Hello", "World"]
"Hello World,I-am code".split(/\s|\W/)  // ["Hello", "World", "I", "am", "code"]

/* Join */
["Hello", "World"].join(" ");           // Sets str to "Hello World"

/* Every: true => Si todos cumple la condicion | false*/
//const isBigEnough = (element, index, array) => element >= 10
const isBigEnough = element => element >= 10

[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

/* Some: true => si alguno  cumple con la condición | false */
[1, 2, 3, -4, 5].some(num => num > 0)   // True
[1, 2, 3, 4, 5].some(num => num < 0)   // False


/**
 * Functional Programming: Introduction to Currying and Partial Application
 */
//Un-curried function
function unCurried(x, y) {
    return x + y;
}

//Curried function
function curried(x) {
    return function (y) {
        return x + y;
    }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

//Impartial function
function impartial(x, y, z) {
    return x + y + z;
}

var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
