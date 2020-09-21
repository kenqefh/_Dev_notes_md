
// Variables: 
    // var: local global
    // let: limitada a su contexto, no puede ser creada de nuevo en ese contexto.
    // const:   en mayuscula, no puede ser reasignada, eso no afecta su modificacion en arrays or functions const.

// Congelar un objeto
const MATH_CONSTANTS = [1, 2, 3]
MATH_CONSTANTS[0] = 0           // [0, 2, 3]

Object.freeze(MATH_CONSTANTS)
MATH_CONSTANTS[0] = 10          // [0, 2, 3], #error

const ANOMINA_FUNCION = () => {
    console.log('funcion anomina!')
}
const FA = () => 'funcion anomina!'
const SUMA = (a, b) => a + b
const SALUDO = (name = 'Frank') => 'Hola ' + name

const REST_PARAMETER = (...args) => args.reduce((a, b) => a + b, 0)

// ES6: The Spread Operator (...)
    // The ES5 code below uses apply() to compute the maximum value in an array:
    var arr = [6, 89, 3, 45];
    var maximus = Math.max.apply(null, arr); // returns 89
    // With ... Operator
    const MAX_CONST = Math.max(...arr); // returns 89
    // will throw:
    // const spreaded = ...arr;

    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2 = [...arr1];  // Copia

    console.log(arr2);

const user = { name: 'John Doe', age: 34 };
// ES6: Use Destructuring Assignment to Extract Values from Objects
    const { name, age } = user;     // name = 'John Doe', age = 34
    
    // Equivalent to:    
    // const name = user.name;      // name = 'John Doe'
    // const age = user.age;        // age = 34
    
// ES6: Use Destructuring Assignment to Assign Variables from Objects
    const { name: userName, age: userAge } = user;
    // userName = 'John Doe', userAge = 34

// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
    const actores = {
        johnDoe: { 
            age: 34,
            email: 'johnDoe@freeCodeCamp.com'
        }
    };
    // Here's how to extract the values of object properties and assign them to variables with the same name:
    const { johnDoe: { age, email }} = actores;
    // And here's how you can assign an object properties' values to variables with different names:
    const { johnDoe: { age: userAge, email: userEmail }} = actores;

// ES6: Use Destructuring Assignment to Assign Variables from Arrays
    const [a, b] = [1, 2, 3, 4, 5, 6];
    console.log(a, b);                  // 1, 2

    // The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
    const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, c);               // 1, 2, 5

// ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
    // The result is similar to Array.prototype.slice(), as shown below:
    const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
    console.log(a, b);      // 1, 2
    console.log(arr);       // [3, 4, 5, 7]

// ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
    const profileUpdate = (profileData) => {
        const { name, age, nationality, location } = profileData;
        // do something with these variables
    } 
    
    // This effectively destructures the object sent into the function. This can also be done in-place:
    const profileUpdate = ({ name, age, nationality, location }) => {
    /* do something with these fields */
    }

// ES6: Create Strings using Template Literals
    const person = {
        name: "Zodiac Hasbro",
        age: 56
    };

    // Template literal with multi-line and string interpolation
    const greeting = `Hello, my name is ${person.name}!
    I am ${person.age} years old.`;

    console.log(greeting);      // Hello, my name is Zodiac Hasbro!
                                // I am 56 years old.
// ES6: Write Concise Object Literal Declarations Using Object Property Shorthand
    // getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:
    const getMousePosition = (x, y) => ({ x, y });

    // Equivalent:
    // const getMousePosition = (x, y) => ({
    //     x: x,
    //     y: y
    // });
    
// ES6: Write Concise Declarative Functions with ES6
    // With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
    const person = {
        name: "Taylor",
        sayHello() {
            return `Hello! My name is ${this.name}.`;
        }
    };

    // ES5 Equivalent:
    // const person = {
    //     name: "Taylor",
    //     sayHello: function() {
    //       return `Hello! My name is ${this.name}.`;
    //     }
    // };

    const bicycle = {
        gear: 2,
        setGear(newGear) {
            this.gear = newGear;
        }
    };
    
    bicycle.setGear(3);
    console.log(bicycle.gear);  //3
  
// ES6: Use class Syntax to Define a Constructor Function
    // The class syntax simply replaces the constructor function creation:
    class SpaceShuttle {
        constructor(targetPlanet) {
            this.targetPlanet = targetPlanet;
        }
    }
    const zeus = new SpaceShuttle('Jupiter');

    // In ES5, we usually define a constructor function and use the new keyword to instantiate an object:
    var SpaceShuttle = function(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
    var zeus = new SpaceShuttle('Jupiter');

// ES6: Use getters and setters to Control Access to an Object
// No vuelve privada a los atributos (_attrName)
    class Book {
        constructor(author) {
          this._author = author;
        }
        // getter
        get writer() {
          return this._author;
        }
        // setter
        set writer(updatedAuthor) {
          this._author = updatedAuthor;
        }
    }
    const lol = new Book('anonymous');
    console.log(lol.writer);  // anonymous
    lol.writer = 'wut';
    console.log(lol.writer);  // wut
    console.log(lol._author);  // wut // aun se puede acceder, no es privado

// ES6: Create a Module Script
    // In HTML
    <script type="module" src="filename.js"></script>

// ES6: Use export to Share a Code Block
    export const add = (x, y) => {
        return x + y;
    }

    // The above is a common way to export a single function, but you can achieve the same thing like this:
    const add = (x, y) => {
        return x + y;
    }
    export { add, subtract };

// ES6: Reuse JavaScript Code Using import
    import { add } from './math_functions.js';
    add(10, 5)

// ES6: Use * to Import Everything from a File
    import * as myMathModule from "./math_functions.js"
    myMathModule.add(2, 3)
    myMathModule.subtract(10, 5)

// ES6: Create an Export Fallback with export default
    export default function add(x, y) {     // named function
      return x + y;
    }

    export default function(x, y) {         // anonymous function
      return x + y;
    }
    // Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file.
    // Additionally, you cannot use export default with var, let, or const

// ES6: Import a Default Export
    import add from "./math_functions.js";

// ES6: Create a JavaScript Promise
    const myPromise = new Promise((resolve, reject) => {

    });

// ES6: Complete a Promise with resolve and reject
    // A promise has three states: pending, fulfilled, and rejected.
    // The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise.
    // The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed,
    // and reject is used when you want it to fail.
    const myPromise = new Promise((resolve, reject) => {
        if(!!'una condicion') {
            resolve("Promise was fulfilled");
        } else {
            reject("Promise was rejected");
        }
    });

// ES6: Handle a Fulfilled Promise with then
    // Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. 
    // The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

    myPromise.then(result => {
    // do something with the result.
    });
    // 'result' comes from the argument given to the 'resolve' method.

    const promise1 = new Promise((resolve, reject) => {
        resolve('Success!');
    });
    
    promise1.then((value) => {
        console.log(value);
        // expected output: "Success!"
    });

// ES6: Handle a Rejected Promise with catch
    // catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:
    myPromise.catch(error => {
        // do something with the error.
    });