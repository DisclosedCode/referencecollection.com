/*
Javascript Reference and Guide

ReferenceCollection.com
Licensed under CC BY-SA
*/

/*
Table of Contents
-----------------
1.  Introduction
2.  Comments and Basic Syntax
3.  Modules
4.  Variables and Data Types
5.  Operators
6.  Control Flow Statements
7.  Arrays
8.  Functions
9.  Objects
10. DOM Manipulation
11. Events
12. Asynchronous JavaScript
13. Error Handling
*/

/*
---------------
1. Introduction
---------------
*/

/*
Overview:
JavaScript is a dynamic, lightweight scripting language primarily used
for web development, enabling interactive elements and behavior on webpages.

History:
Developed by Netscape Communications Corporation in 1995, JavaScript has evolved
significantly over the years, with standardized versions like ECMAScript bringing
new features and improvements. It is now supported by all major web browsers.

JavaScript Engine:
A JavaScript engine is a program or an interpreter that executes JavaScript
code. Some popular JavaScript engines include V8 (used in Google Chrome), SpiderMonkey
(in Mozilla Firefox), and JavaScriptCore (in Apple Safari).

ECMAScript:
ECMAScript is the standard upon which JavaScript is based. It defines the
syntax, semantics, and core features of the language and serves as a guideline
for browser vendors in implementing JavaScript interpreters.
*/

/*
----------------------------
2. Comments and Basic Syntax
----------------------------
*/

/* 
Comments:
Comments in JavaScript are used to annotate code.
There are two types of comments: single-line and multi-line.
*/

// Single-line comment

/*
Multi-line
comment
*/

/*
Semicolons:
Although not required, ending statements with semicolons is a best practice.
*/
var x = 5;

/*
Case Sensitivity:
JavaScript is case-sensitive, meaning 'number' and 'Number' are different.
*/
var number = 10;
var Number = 20;

/*
Strict Mode:
Introduced in ECMAScript 5, strict mode imposes stricter parsing and
error handling.
*/
"use strict";

/*
----------
3. Modules
----------
Modules are separate files containing reusable code
*/

// File: math.js
function add(a, b) {
    return a + b;
}

/*
Exporting Modules:
Export functions, objects, or variables using 'export' to make them accessible
to other modules.
*/
export function add(a, b) {
    return a + b;
}

/*
Importing Modules:
Allow access to functions, objects, or variables exported by the imported module.
*/
import {add} from './math.js';

/*
---------------------------
4. Variables and Data Types
---------------------------
*/

/*
Variables:
In JavaScript, there are three ways to declare variables: let, var, and const.
- let: Block-scoped. Can be reassigned but not re-declared within the same scope.
- var: Function-scoped or globally-scoped. Can be reassigned and re-declared.
- const: Block-scoped. Cannot be reassigned and must be initialized.
*/
var number = 10;
let name = "John";
const PI = 3.14;

/*
Primitive Data Types:
JavaScript has six primitive data types:
undefined, null, boolean, number, string, and symbol.
*/
let age = 25;                       // Number: numeric values
let message = "Hello, World!";      // String: textual data
let isValid = true;                 // Boolean: true or false
let undefinedVariable;              // Undefined: variable that has not been assigned a value
let nullValue = null;               // Null: the absence of a value
let id = Symbol('id');   // Symbol: a unique identifier

/*
Reference Data Types:
Objects that hold a reference to their data.
*/
let object = {key: 'value'};            // Object
let colors = ["red", "green", "blue"];  // Array
let functionObject = function () {      // Function
};

/*
Dynamic Typing:
JavaScript is dynamically typed, meaning variables can hold values of any data type.
*/
let dynamicVariable = 10;
dynamicVariable = 'Text';

/*
Type Conversion (Coercion):
JavaScript automatically converts data types when needed explicitly or implicitly.
*/

// Implicit
let result = 10 + "5";      // "105" (number converted to string)

// Explicit
let str = "10";
let num = parseInt(str);    // 10 (string converted to number)

// -------------
// 5. Operators
// -------------

/*
Arithmetic Operators:
Perform basic mathematical operations.
*/
let a = 10;
let b = 5;
let sum = a + b;           // Addition
let difference = a - b;    // Subtraction
let product = a * b;       // Multiplication
let quotient = a / b;      // Division
let remainder = a % b;     // Modulus

/*
Assignment Operators:
Assigning values with operations.
*/
let x = 10;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 5; // x = x / 5
x %= 7; // x = x % 7

/*
Comparison Operators:
Comparing values, returns true or false.
*/
let isEqual = a === b;       // Equality
let isGreater = a > b;       // Greater than
let isLesser = a < b;        // Less than
let notEqual = a !== b;      // Not equal to
let greaterOrEqual = a >= b; // Greater than or equal to
let lesserOrEqual = a <= b;  // Less than or equal to

/*
Logical Operators:
Combine multiple conditions, returns true or false.
*/
let x = true;
let y = false;
let logicalAnd = x && y;    // Logical AND
let logicalOr = x || y;     // Logical OR
let logicalNotX = !x;       // Logical NOT

/*
Bitwise Operators:
Perform operations at bit level.
*/
let bitwiseAnd = a & b;     // Bitwise AND
let bitwiseOr = a | b;      // Bitwise OR
let bitwiseXor = a ^ b;     // Bitwise XOR
let bitwiseComplement = ~a; // Bitwise Complement
let leftShift = a << 1;     // Left Shift
let rightShift = a >> 1;    // Right Shift

/*
Unary Operators:
Unary operators operate on a single operand.
*/
let pre_increment = ++a;    // Pre-increment
let pre_decrement = --a;    // Pre-decrement
let post_increment = a++;   // Post-increment
let post_decrement = a--;   // Post-decrement
let positive = +a;          // Positive
let negative = -a;          // Negative
let logical = !true;        // Logical negation

/*
Ternary Operator:
Concise way to write conditional expressions.
Syntax: (condition) ? (if-true) : (if-false)
*/
let score = 65;
let result = (score >= 50) ? 'Pass' : 'Fail';

/*
--------------------------
6. Control Flow Statements
--------------------------
*/

// Conditional statements

/*
if-else statement:
Executes a code block if a condition is true.
*/
let score = 65;
if (score > 50) {
    console.log("score > 50");
} else if (score < 50) {
    console.log("score < 50");
} else {
    console.log("score = 50");
}

/*
switch statement:
Executes a code block based on the value of a variable.
*/
let choice = 2;
switch (choice) {
    case 1:
        console.log("Choice is 1");
        break;
    case 2:
        console.log("Choice is 2");
        break;
    default:
        console.log("Invalid choice");
}

// Looping statements

/*
for statement:
Repeat a code block until a condition is false.
*/
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

/*
while statement:
Repeat a code block until a condition is true.
*/
let i = 1;
while (i <= 5) {
    console.log("Iteration " + i);
    i++;
}

/*
do-while statement:
Similar to 'while', but the code block is executed at least once.
*/
let j = 1;
do {
    console.log("Iteration " + j);
    j++;
} while (j <= 5);

/*
for-of statement:
Iterate over arrays or objects.
*/
let numbers = [1, 2, 3];
for (let number of numbers) {
    console.log("Number: " + number);
}

// Transfer statements:

/*
break statement:
Exit loop or switch statement.
*/
for (let m = 0; m < 10; m++) {
    if (m === 7) {
        break;
    }
}

/*
continue statement:
Skip current iteration, proceed with next.
*/
for (let m = 0; m < 10; m++) {
    if (m === 3) {
        continue;
    }
}

/*
return statement:
Exit function, optionally sending back value.
*/
function multiply(a, b) {
    return ab;
}

/*
---------
7. Arrays
---------
*/

/*
Declaration and Initialization:
Arrays are ordered elements of different data types
*/
let array = [123, 'John', false];

/*
Modifying Elements:
Arrays can be modified by assigning new values to them.
*/
array[0] = '10';

/*
Accessing Array Elements:
Elements are accessed using index numbers, starting from 0.
*/
console.log(array[0]); // '10'

/*
Adding & Removing Elements:
Elements can be added or removed using various methods.
*/

// Adding:
array.push('45'); // Adds to the end
array.unshift('David'); // Adds to the beginning

// Removing:
let removedLastElement = array.pop();    // Removes the last element and returns it
let removedFirstElement = array.shift(); // Removes the first element and returns it

/*
Iterating Arrays:
Arrays can be iterated using loops or array methods.
*/

// Using for:
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Using forEach:
array.forEach(function (element) {
    console.log(element);
});

/*
Array Methods:
Javascript provides various built-in methods to manipulate arrays.
*/

// Concatenating
let secondArray = [10, false, 'Noah', 65];
let bothArrays = array.concat(secondArray);

// Joining: Joins elements using ';'
secondArray.join(";"); // "10;false;Noah;65"

// Slicing: returns subarray from: '1' (include) to '3' (exclude)
secondArray.slice(1, 3); // [false, 'Noah']

// Splicing: Removes '2' elements from index '1', inserts 'David', '123' and returns removed subarray
secondArray.splice(1, 2, "David", 123); // [false, 'Noah']

// Sorting: Sorts the array alphabetically
secondArray.sort();

// Reversing: Reverses the order of the elements
secondArray.reverse();

// Finding index of the first occurrence
secondArray.indexOf('David');

/*
------------
8. Functions
------------
*/

/*
Function Declaration and Invocation:
Functions are blocks of reusable code.
*/

function greet() {
    console.log("Hello, world!");
}

greet();

/*
Function Parameters and Arguments:
Arguments are values passed to a function.
*/
function greetWithName(name) {
    console.log("Hello, " + name + "!");
}

greetWithName("John"); // Hello John

/*
Default Parameters:
Functions can have default values.
*/

function greetWithName(name = "World") {
    console.log("Hello, " + name + "!");
}

greetWithName(); // Hello, World!
greetWithName('David'); // Hello, David!

/*
Rest Parameters:
Rest parameters allow functions to accept an indefinite number of arguments.
*/

function sum(...numbers) {
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}

console.log(sum());                  // Result: 0
console.log(sum(1, 2));     // Result: 3
console.log(sum(1, 2, 3));  // Result: 6

/*
Function Expressions:
Functions can be assigned to variables or passed as arguments to other functions.
*/
let multiply = function (a, b) {
    return ab;
};

let product = multiply(3, 5); // product = 15

/*
Arrow Functions:
Arrow functions are anonymous functions that provides a concise syntax for
writing functions.
*/
let subtract = (a, b) => {
    return a - b;
};

let difference = subtract(8, 3); // difference = 5

/*
Function Scope:
Variables declared inside a function are not accessible outside it.
*/
function myFunction() {
    var localVar = "I'm a local variable";
    let localVar1 = "I'm a local variable";
    const localVar2 = "I'm a local variable";
    console.log(localVar);
}

console.log(localVar); // Error: localVar is not defined

/*
Function Closures:
Closures allow functions to access and manipulate variables from outer scopes.
*/
function outer() {
    let outerVariable = "Outer Variable";

    function inner() {
        console.log(outerVariable); // Inner() has access to outerVariable -> Closure
    }

    return inner;
}

let closureFunction = outer();
closureFunction(); // "Outer Variable"

/*
Immediately Invoked Function Expressions (IIFE):
IIFE is a function expression that is executed immediately after it's created.
*/
(function () {
    var variable = 'This is private variable'; // private variable
    console.log("IIFE executed! " + variable);
})();

/*
----------
9. Objects
----------
*/

/*
Object Declaration and Initialization:
Objects can be defined using object literals; key-value pairs.
*/
var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2006
};

/*
Accessing and Modifying Properties:
Properties can be accessed or modified.
*/

// Accessing
console.log(car.brand); // Toyota
console.log(car["brand"]); // Toyota

// Modifying
car.year = 2010;

/*
Adding and Removing Properties:
Properties can be added to an object or removed from it.
*/
car.color = "blue"; // Adding a new property
delete car.year; // Removing year property

/*
Property Existence:
The 'in' operator and 'hasOwnProperty' methods can be used to check if a
property exists in an object.
*/
let hasAge = "color" in car;
let hasAddress = car.hasOwnProperty("color");

/*
Object Methods:
Objects can have functions as properties, known as methods.
*/
var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2005,
    start: function () {
        console.log("Engine started");
    },
    stop: function () {
        console.log("Engine stopped");
    }
};

car.start(); // Engine started
car.stop(); // Engine stopped

/*
Object Constructors:
Objects can be created using constructor functions.
*/
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var corolla = new Car("Toyota", "Corolla", 2003);
var prius = new Car("Toyota", "Prius", 2007);

/*
Prototypes:
Allows adding properties and methods to all objects of any type.
*/
Car.prototype.displayCarInfo = function () {
    return this.brand + " " + this.model + " " + this.year;
};
console.log(corolla.displayCarInfo()); // Toyota Corolla 2003

/*
Inheritance:
Allows objects to inherit properties and methods from other objects.
*/

// Prototype-based inheritance

function ElectricCar(brand, model, year, batteryCapacity) {
    Car.call(this, brand, model, year); // Call the parent constructor
    this.batteryCapacity = batteryCapacity;
}

// Inherit Car's prototype
ElectricCar.prototype = Object.create(Car.prototype);

// Add a method specific to ElectricCar
ElectricCar.prototype.charge = function () {
    console.log("Charging the battery of " + this.brand + " " + this.model);
};

let teslaModelS = new ElectricCar("Tesla", "Model S", 2021, "60 kWh");
// Method from Car prototype
teslaModelS.displayCarInfo(); // Tesla Model S 2021
// Method specific to ElectricCar
teslaModelS.charge(); // Charging the battery of Tesla Model S

// Class syntax (ES6+)
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year); // Call the parent constructor
        this.batteryCapacity = batteryCapacity;
    }

    // Method specific to ElectricCar to charge the battery.
    charge() {
        console.log(`Charging the battery of ${this.brand} ${this.model}`);
    }
}

let teslaModelS = new ElectricCar("Tesla", "Model S", 2021, "60 kWh");
teslaModelS.displayCarInfo(); // Output: Tesla Model S 2021
teslaModelS.charge(); // Output: Charging the battery of Tesla Model S

/*
Object Destructuring:
allows you to extract properties from objects.
*/
var {brand, model} = car;
console.log(brand); // Toyota
console.log(model); // Camry

/*
The Spread Operator (...):
Can be used to clone an object or merge multiple objects into one.
*/
var teslaClone = {...teslaModelS}; // Cloning
var mergedObject = {...teslaModelS, mileage: 78934}; // Merging

/*
--------------------
10. DOM Manipulation
--------------------
The Document Object Model (DOM) is a tree-like structure that represents the
elements of a webpage. It allows JavaScript to interact with this tree, enabling
you to access, modify, add, or remove elements dynamically.
*/

/*
Accessing DOM Elements:
JavaScript can access DOM elements using various methods.
*/
let elementById = document.getElementById('someId');
let elementsByClass = document.getElementsByClassName('someClass');
let elementsByTag = document.getElementsByTagName('div');
let elementByQuery = document.querySelector('#someId .someClass');
let elementsByQueryAll = document.querySelectorAll('.someClass');

/*
Modifying DOM Elements
----------------------
We can modify DOM elements by changing their properties, attributes, or even
content.
*/

// Changing text content
elementById.textContent = "New text";
// Changing HTML content
elementById.innerHTML = "<strong>New content</strong>";
// Adding/Removing attributes
elementById.setAttribute('class', 'newClass');
elementById.removeAttribute('class');
// Changing Style
elementById.style.color = "red";
// Adding/Removing classes
elementById.classList.add('newClass');
elementById.classList.remove('oldClass');

/*
Creating DOM Elements:
We can also create new DOM elements dynamically.
*/

// Creating a new element
let newElement = document.createElement('div');
// Adding attributes
newElement.setAttribute('class', 'someClass');
// Adding content
newElement.textContent = "New Element";
// Appending to the document
document.body.appendChild(newElement);

/*
Removing DOM Elements:
We can remove existing elements from the webpage.
*/
let elementToRemove = document.getElementById('someId');
elementToRemove.parentNode.removeChild(elementToRemove);

/*
----------
11. Events
----------
Events are actions triggered by users or the browser itself,
like page load, resizing, clicks, keyboard inputs, mouse movements, etc.
*/

/*
Event handlers:
Event handlers are functions that are executed when a specific event occurs.
*/

// Inline Event Handlers
document.body.innerHTML += '<button onclick="onClickFunction()">Click me</button>';
function onClickFunction() {
    // Event handling code
}

// DOM Event Handlers
let button = document.getElementById("myButton");
button.onclick = function() {
    // Event handling code
};

// Event Listeners
let button = document.getElementById('myButton');
button.addEventListener('click', function (event) {
    // Event handling code
});

/*
Event Types:
There are various types of events that can occur in a web page.
Here are some common types:
 *
Mouse Events:
- click: When you click the mouse button.
- dblclick: When you quickly double-click the mouse button.
- mousedown: When you press down a mouse button over something.
- mouseup: When you release a mouse button over something.
- mousemove: When you move the mouse pointer over something.
- mouseover: When the mouse pointer enters something.
- mouseout: When the mouse pointer leaves something.
 *
Keyboard Events:
- keydown: When you press down a key.
- keyup: When you release a key.
- keypress: When you press a key.
 *
Form Events:
- submit: When you submit a form.
- reset: When you reset a form.
- input: When you change the value of an input element.
- change: When the value of a form element changes.
 *
Focus Events:
- focus: When an element gets focused.
- blur: When an element loses focus.
 *
Window Events:
- load: When the whole page and all its stuff finish loading.
- resize: When you resize the browser window.
- scroll: When you scroll the page.
*/

// Example
let element = document.getElementById('myElement');
element.addEventListener('mouseover', function (event) {
    // Event handling code
});

/*
Event Object:
An event object is automatically generated when an event occurs,
This object contains information about the event.
*/

// Accessing common properties of the event object
element.addEventListener('click', function (event) {
    console.log(event); // Logs the event object
    console.log(event.type); // Logs the type of event (e.g., click)
    console.log(event.target); // Logs the element that triggered the event
    // and more...
});

/*
Event Propagation:
Event propagation refers to the order in which events are handled when an event occurs
on a nested DOM structure.
There are two phases of event propagation: capturing phase and bubbling phase.
*/

/*
<div class="outer" id="outer">
    Outer
    <div class="inner" id="inner">
        Inner
    </div>
</div>
*/

let outer = document.getElementById('outer');
let inner = document.getElementById('inner');

/*
Event Propagation: Event Bubbling (default):
When an event occurs on an element, it bubbles up through its ancestors.
We can use event.stopPropagation() to stop the bubbling phase.
*/
outer.addEventListener('click', function (event) {
    console.log('Outer clicked');
});

inner.addEventListener('click', function (event) {
    console.log('Inner clicked');
    // Stops event from bubbling up to the outer element, triggering both events.
    event.stopPropagation();
});

/*
Event Propagation: Event Capturing:
The event is captured first by the outermost element and then propagated to the inner elements.
Can be activated by setting 'true' the UseCapture parameter.
*/
outer.addEventListener('click', function (event) {
    console.log('Outer capturing phase');
}, true); // UseCapture parameter set to true for capturing phase

inner.addEventListener('click', function (event) {
    console.log('Inner capturing phase');
}, true); // UseCapture parameter set to true for capturing phase

/*
Preventing Default Behavior:
Some events trigger specific browser behaviors, such as submitting a form.
We can prevent this default behavior.
*/

// Example: Preventing default form submission behavior
let form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form being submitted
    // Additional form code
});

/*
---------------------------
12. Asynchronous JavaScript
---------------------------
Allows code to be executed concurrently without blocking the main program.
*/

/*
setTimeout and setInterval:
setTimeout() executes a function after a specified delay,
setInterval() repeatedly executes a function at defined intervals until stopped.
*/

// setTimeout
setTimeout(() => {
    console.log('Delayed execution after 2000 ms (2 seconds)');
}, 2000);

// setInterval
let counter = 0;
let intervalId = setInterval(() => {
    console.log('Executed every 1000 ms: ' + counter);
    counter++;
    if (counter === 7) {
        clearInterval(intervalId); // Stops the interval after 7 iterations
    }
}, 1000);

/*
Fetch API:
The Fetch API provides a modern interface for fetching resources (such as JSON, XML, or HTML) across the network.
It is promise-based and offers a more flexible and powerful way to make HTTP requests compared to traditional methods like XMLHttpRequest.
*/
fetch('https://api.example.com/data')
    .then(function (response) {
        // Check if the response status is successful
        if (!response.ok) {
            throw new Error('The network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(function (data) {
        // Handle the JSON data
        console.log(data);
    })
    .catch(function (error) {
        // Handle errors that occurred during the fetch
        console.error('Fetch error:', error);
    });

/*
Callbacks:
Callback functions are functions passed as arguments to other functions
to be executed later.
*/
function fetchData(callback) {
    setTimeout(function () {
        let data = 'Fetched Data';
        callback(data);
    }, 1000);
}

fetchData(function (data) {
    console.log('Received data: ' + data); // Received data: Fetched Data
});

/*
Promises:
Promises are like a guarantee that something will happen in the future,
either success or failure, of an action.
*/
function fetchData() {
    return new Promise((resolve, reject) => {
        // Fetching data from a server
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

/*
Async/Await:
Async/Await is a modern feature built on top of promises,
It makes asynchronous code look more like synchronous code with cleaner syntax.
 *
Async: To indicate that the function is asynchronous.
Await: Used inside async functions to wait for promises before moving to the next line.
 *
*/
async function fetchData() {
    // Asynchronously fetch data from an API
    const response = await fetch('https://api.example.com/data');
    // Wait for the fetch operation to complete, then continue execution
    const data = await response.json();
    // Return the parsed data
    return data;
}

// Call the async function
fetchData()
    .then(data => {
        // Use the fetched data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
    });

/*
------------------
13. Error Handling
------------------
Handle unexpected or erroneous situations that may occur and prevent program crashes.
*/

/*
try...catch Statement:
Used to handle errors within a block of code.
*/
try {
    // Code that might throw an error
    throw new Error('An error occurred');
} catch (error) {
    // Error handling logic
    console.error('Error:', error.message);
}

/*
Error Object:
Is a built-in object that provides information about errors
*/
try {
    throw new Error('An error occurred');
} catch (error) {
    console.error('Error message:', error.message);
    console.error('Error name:', error.name);
    console.error('Stack trace:', error.stack);
}

/*
Throwing Errors:
You can manually throw errors using the throw statement.
*/
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log('Result:', result);
} catch (error) {
    console.error('Error:', error.message);
}

/*
Custom Error Handling:
You can create custom error types by extending the Error object.
*/
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    // Throwing a custom error with a custom message
    throw new MyCustomError("This is a custom error message");
} catch (error) {
    console.error("Error:", error); // Error: MyCustomError: This is a custom error message
    console.error("Error name:", error.name); // Error name: MyCustomError
}