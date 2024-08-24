/*
 * Javascript Reference
 *
 * Author: ReferenceCollection.com
 * License: MIT License
 */

/**
 * Introduction
 *
 * 1. Overview
 * 2. History
 * 3. JavaScript Engine
 * 4. ECMAScript
 */

/*
 * 1. Overview:
 * JavaScript is a dynamic, lightweight scripting language primarily used
 * for web development, enabling interactive elements and behavior on webpages.
 *
 * 2. History:
 * Developed by Netscape Communications Corporation in 1995, JavaScript has evolved
 * significantly over the years, with standardized versions like ECMAScript bringing
 * new features and improvements. It is now supported by all major web browsers.
 *
 * 3. JavaScript Engine:
 * A JavaScript engine is a program or an interpreter that executes JavaScript
 * code. Some popular JavaScript engines include V8 (used in Google Chrome), SpiderMonkey
 * (in Mozilla Firefox), and JavaScriptCore (in Apple Safari).
 *
 * 4. ECMAScript:
 * ECMAScript is the standard upon which JavaScript is based. It defines the
 * syntax, semantics, and core features of the language and serves as a guideline
 * for browser vendors in implementing JavaScript interpreters.
 */

/**
 * I. Comments and Basic Syntax
 *
 * 1. Comments
 * 2. Semicolons
 * 3. Case Sensitivity
 * 4. Strict Mode
 */

/*
 * 1. Comments:
 * Comments in JavaScript are used to annotate code.
 * There are two types of comments: single-line and multi-line.
 */

// Single-line comment

/*
 * Multi-line
 * comment
 */

/*
 * 2. Semicolons:
 * Although not required, ending statements with semicolons is a best practice.
 */
var x = 5;

/*
 * 3. Case Sensitivity:
 * JavaScript is case-sensitive, meaning 'number' and 'Number' are different.
 */
var number = 10;
var Number = 20;

/*
 * 4. Strict Mode:
 * Introduced in ECMAScript 5, strict mode imposes stricter parsing and
 * error handling.
 */
"use strict";

/**
 * II. Modules
 *
 * 1. Modules
 * 3. Exporting Modules
 * 2. Importing Modules
 */

/*
 * 1. Modules:
 * JavaScript modules are separate files containing reusable code,
 */

// File: math.js
function add(a, b) {
    return a + b;
}

/*
 * 2. Exporting Modules:
 * Export functions, objects, or variables using 'export' to make them accessible
 * to other modules.
 */
export function add(a, b) {
    return a + b;
}

/*
 * 3. Importing Modules:
 * Allow access to functions, objects, or variables exported by the imported module.
 */
import {add} from './math.js';

/**
 * III. Variables and Data Types
 *
 * 1. Variables
 * 1. Primitive Data Types
 * 2. Reference Data Types
 * 3. Dynamic Typing
 * 4. Type Conversion
 */

/*
 * 1. Variables:
 * In JavaScript, there are three ways to declare variables: let, var, and const.
 * - let: Block-scoped. Can be reassigned but not re-declared within the same scope.
 * - var: Function-scoped or globally-scoped. Can be reassigned and re-declared.
 * - const: Block-scoped. Cannot be reassigned and must be initialized.
 */
var number = 10;
let name = "John";
const PI = 3.14;

/*
 * 1. Primitive Data Types:
 * JavaScript has six primitive data types:
 * undefined, null, boolean, number, string, and symbol.
 */
let age = 25;                       // Number: numeric values
let message = "Hello, World!";      // String: textual data
let isValid = true;                 // Boolean: true or false
let undefinedVariable;              // Undefined: variable that has not been assigned a value
let nullValue = null;               // Null: the absence of a value
let id = Symbol('id');   // Symbol: a unique identifier

/*
 * 2. Reference Data Types:
 * Objects that hold a reference to their data.
 */
let object = {key: 'value'};            // Object
let colors = ["red", "green", "blue"];  // Array
let functionObject = function () {      // Function
};

/*
 * 3. Dynamic Typing:
 * JavaScript is dynamically typed, meaning variables can hold values of any data type.
 */
let dynamicVariable = 10;
dynamicVariable = 'Text';

/*
 * 4. Type Conversion (Coercion):
 * JavaScript automatically converts data types when needed explicitly or implicitly.
 */

// Implicit
let result = 10 + "5";      // "105" (number converted to string)

// Explicit
let str = "10";
let num = parseInt(str);    // 10 (string converted to number)

/**
 * IV. Operators
 *
 * 1. Arithmetic Operators
 * 2. Assignment Operators
 * 3. Comparison Operators
 * 4. Logical Operators
 * 5. Bitwise Operators
 * 6. Unary Operators
 * 7. Ternary Operator
 */

/*
 * 1. Arithmetic Operators:
 * Perform basic mathematical operations.
 */
let a = 10;
let b = 5;
let sum = a + b;           // Addition
let difference = a - b;    // Subtraction
let product = a * b;       // Multiplication
let quotient = a / b;      // Division
let remainder = a % b;     // Modulus

/*
 * 2. Assignment Operators:
 * Assigning values with operations.
 */
let x = 10;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 5; // x = x / 5
x %= 7; // x = x % 7

/*
 * 3. Comparison Operators:
 * Comparing values, returns true or false.
 */
let isEqual = a === b;       // Equality
let isGreater = a > b;       // Greater than
let isLesser = a < b;        // Less than
let notEqual = a !== b;      // Not equal to
let greaterOrEqual = a >= b; // Greater than or equal to
let lesserOrEqual = a <= b;  // Less than or equal to

/*
 * 4. Logical Operators:
 * Combine multiple conditions, returns true or false.
 */
let x = true;
let y = false;
let logicalAnd = x && y;    // Logical AND
let logicalOr = x || y;     // Logical OR
let logicalNotX = !x;       // Logical NOT

/*
 * 5. Bitwise Operators:
 * Perform operations at bit level.
 */
let bitwiseAnd = a & b;     // Bitwise AND
let bitwiseOr = a | b;      // Bitwise OR
let bitwiseXor = a ^ b;     // Bitwise XOR
let bitwiseComplement = ~a; // Bitwise Complement
let leftShift = a << 1;     // Left Shift
let rightShift = a >> 1;    // Right Shift

/*
 * 6. Unary Operators:
 * Unary operators operate on a single operand.
 */
let pre_increment = ++a;    // Pre-increment
let pre_decrement = --a;    // Pre-decrement
let post_increment = a++;   // Post-increment
let post_decrement = a--;   // Post-decrement
let positive = +a;          // Positive
let negative = -a;          // Negative
let logical = !true;        // Logical negation

/*
 * 7. Ternary Operator:
 * Concise way to write conditional expressions.
 * Syntax: (condition) ? (if-true) : (if-false)
 */
let score = 65;
let result = (score >= 50) ? 'Pass' : 'Fail';

/**
 * V. Control Flow Statements
 *
 * 1. Conditional Statements
 * 2. Looping Statements
 * 3. Transfer Statements
 */

/*
 * 1. Conditional statements:
 *    if-else
 *    switch
 */

/*
 * if-else statement:
 * Executes a code block if a condition is true.
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
 * switch statement:
 * Executes a code block based on the value of a variable.
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

/*
 * 2. Looping statements:
 *    for
 *    while
 *    do-while
 *    for-of
 */

/*
 * for statement:
 * Repeat a code block until a condition is false.
 */
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

/*
 * while statement:
 * Repeat a code block until a condition is true.
 */
let i = 1;
while (i <= 5) {
    console.log("Iteration " + i);
    i++;
}

/*
 * do-while statement:
 * Similar to 'while', but the code block is executed at least once.
 */
let j = 1;
do {
    console.log("Iteration " + j);
    j++;
} while (j <= 5);

/*
 * for-of statement:
 * Iterate over arrays or objects.
 */
let numbers = [1, 2, 3];
for (let number of numbers) {
    console.log("Number: " + number);
}

/*
 * 3. Transfer statements:
 *    break
 *    continue
 *    return
 */

/*
 * break statement:
 * Exit loop or switch statement.
 */
for (let m = 0; m < 10; m++) {
    if (m === 7) {
        break;
    }
}

/*
 * continue statement:
 * Skip current iteration, proceed with next.
 */
for (let m = 0; m < 10; m++) {
    if (m === 3) {
        continue;
    }
}

/*
 * return statement:
 * Exit function, optionally sending back value.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * VI. Arrays
 *
 * 1. Declaration and Initialization
 * 2. Modifying Elements
 * 3. Accessing Elements
 * 4. Adding & Removing Elements
 * 5. Iterating Arrays
 * 6. Array Methods
 */

/*
 * 1. Declaration and Initialization:
 * Arrays are ordered elements of different data types
 */
let array = [123, 'John', false];

/*
 * 2. Modifying Elements:
 * Arrays can be modified by assigning new values to them.
 */
array[0] = '10';

/*
 * 3. Accessing Array Elements:
 * Elements are accessed using index numbers, starting from 0.
 */
console.log(array[0]); // '10'

/*
 * 4. Adding & Removing Elements:
 * Elements can be added or removed using various methods.
 */

// Adding:
array.push('45'); // Adds to the end
array.unshift('David'); // Adds to the beginning

// Removing:
let removedLastElement = array.pop();    // Removes the last element and returns it
let removedFirstElement = array.shift(); // Removes the first element and returns it

/*
 * 5. Iterating Arrays:
 * Arrays can be iterated using loops or array methods.
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
 * 5. Array Methods:
 * Javascript provides various built-in methods to manipulate arrays.
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

/**
 * VII. Functions
 *
 * 1. Function Declaration and Invocation
 * 2. Function Parameters and Arguments
 * 3. Default Parameters
 * 4. Rest Parameters
 * 5. Function Expressions
 * 6. Arrow Functions
 * 7. Function Scope
 * 8. Function Closures
 * 9. Immediately Invoked Function Expressions (IIFE)
 */

/*
 * 1. Function Declaration and Invocation:
 * Functions are blocks of reusable code.
 */

function greet() {
    console.log("Hello, world!");
}

greet();

/*
 * 2. Function Parameters and Arguments:
 * Arguments are values passed to a function.
 */
function greetWithName(name) {
    console.log("Hello, " + name + "!");
}

greetWithName("John"); // Hello John

/*
 * 3. Default Parameters:
 * Functions can have default values.
 */

function greetWithName(name = "World") {
    console.log("Hello, " + name + "!");
}

greetWithName(); // Hello, World!
greetWithName('David'); // Hello, David!

/*
 * 4. Rest Parameters:
 * Rest parameters allow functions to accept an indefinite number of arguments.
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
 * 5. Function Expressions:
 * Functions can be assigned to variables or passed as arguments to other functions.
 */
let multiply = function (a, b) {
    return a * b;
};

let product = multiply(3, 5); // product = 15

/*
 * 6. Arrow Functions:
 * Arrow functions are anonymous functions that provides a concise syntax for
 * writing functions.
 */
let subtract = (a, b) => {
    return a - b;
};

let difference = subtract(8, 3); // difference = 5

/*
 * 7. Function Scope:
 * Variables declared inside a function are not accessible outside it.
 */
function myFunction() {
    var localVar = "I'm a local variable";
    let localVar1 = "I'm a local variable";
    const localVar2 = "I'm a local variable";
    console.log(localVar);
}

console.log(localVar); // Error: localVar is not defined

/*
 * 8. Function Closures:
 * Closures allow functions to access and manipulate variables from outer scopes.
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
 * 9. Immediately Invoked Function Expressions (IIFE):
 * IIFE is a function expression that is executed immediately after it's created.
 */
(function () {
    var variable = 'This is private variable'; // private variable
    console.log("IIFE executed! " + variable);
})();

/**
 * VIII. Objects
 *
 * 1. Object Declaration and Initialization
 * 2. Accessing and Modifying Properties
 * 3. Adding and Removing Properties
 * 4. Object Methods
 * 5. Object Constructors
 * 6. Prototypes
 * 7. Inheritance
 * 8. Object Destructuring
 * 9. The Spread Operator
 */

/*
 * 1. Object Declaration and Initialization:
 * Objects can be defined using object literals; key-value pairs.
 */
var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2006
};

/*
 * 2. Accessing and Modifying Properties:
 * Properties can be accessed or modified.
 */

// Accessing
console.log(car.brand); // Toyota
console.log(car["brand"]); // Toyota

// Modifying
car.year = 2010;

/*
 * 3. Adding and Removing Properties:
 * Properties can be added to an object or removed from it.
 */
car.color = "blue"; // Adding a new property
delete car.year; // Removing year property

/*
 * 4. Property Existence:
 * The 'in' operator and 'hasOwnProperty' methods can be used to check if a
 * property exists in an object.
 */
let hasAge = "color" in car;
let hasAddress = car.hasOwnProperty("color");

/*
 * 5. Object Methods:
 * Objects can have functions as properties, known as methods.
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
 * 6. Object Constructors:
 * Objects can be created using constructor functions.
 */
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var corolla = new Car("Toyota", "Corolla", 2003);
var prius = new Car("Toyota", "Prius", 2007);

/*
 * 7. Prototypes:
 * Allows adding properties and methods to all objects of any type.
 */

Car.prototype.displayCarInfo = function () {
    return this.brand + " " + this.model + " " + this.year;
};
console.log(corolla.displayCarInfo()); // Toyota Corolla 2003

/*
 * 8. Inheritance:
 * Allows objects to inherit properties and methods from other objects.
 */

/*
 * Prototype-based inheritance
 */
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

/*
 * Class syntax (ES6+)
 */
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
 * 9. Object Destructuring:
 * allows you to extract properties from objects.
 */
var {brand, model} = car;
console.log(brand); // Toyota
console.log(model); // Camry

/*
 * 10. The Spread Operator (...):
 * Can be used to clone an object or merge multiple objects into one.
 */
var teslaClone = {...teslaModelS}; // Cloning
var mergedObject = {...teslaModelS, mileage: 78934}; // Merging

/**
 * IX. DOM Manipulation
 *
 * 1. Introduction to the DOM
 * 2. Accessing DOM Elements
 * 3. Modifying DOM Elements
 * 4. Creating DOM Elements
 * 5. Removing DOM Elements
 * 6. Working with Attributes
 */

/*
 * 1. Introduction to the DOM:
 * The Document Object Model (DOM) is a tree-like structure that represents the
 * elements of a webpage. It allows JavaScript to interact with this tree, enabling
 * you to access, modify, add, or remove elements dynamically.
 */

/*
 * 2. Accessing DOM Elements:
 * JavaScript can access DOM elements using various methods.
 */
let elementById = document.getElementById('someId');
let elementsByClass = document.getElementsByClassName('someClass');
let elementsByTag = document.getElementsByTagName('div');
let elementByQuery = document.querySelector('#someId .someClass');
let elementsByQueryAll = document.querySelectorAll('.someClass');

/*
 * 3. Modifying DOM Elements:
 * We can modify DOM elements by changing their properties, attributes, or even
 * content.
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
 * 4. Creating DOM Elements:
 * We can also create new DOM elements dynamically.
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
 * 5. Removing DOM Elements:
 * We can remove existing elements from the webpage.
 */
let elementToRemove = document.getElementById('someId');
elementToRemove.parentNode.removeChild(elementToRemove);

/**
 * X. Events
 *
 * 1. Introduction to Events
 * 2. Event Handlers
 * 3. Event Types
 * 4. Event Object
 * 5. Event Propagation
 * 6. Preventing Default Behavior
 */

/*
 * 1. Introduction to Events:
 * Events are actions triggered by users or the browser itself,
 * like page load, resizing, clicks, keyboard inputs, mouse movements, etc.
 */

/*
 * 2. Event Handlers:
 * Event handlers are functions that are executed when a specific event occurs.
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
 * 3. Event Types:
 * There are various types of events that can occur in a web page.
 * Here are some common types:
 *
 * Mouse Events:
 * - click: When you click the mouse button.
 * - dblclick: When you quickly double-click the mouse button.
 * - mousedown: When you press down a mouse button over something.
 * - mouseup: When you release a mouse button over something.
 * - mousemove: When you move the mouse pointer over something.
 * - mouseover: When the mouse pointer enters something.
 * - mouseout: When the mouse pointer leaves something.
 *
 * Keyboard Events:
 * - keydown: When you press down a key.
 * - keyup: When you release a key.
 * - keypress: When you press a key.
 *
 * Form Events:
 * - submit: When you submit a form.
 * - reset: When you reset a form.
 * - input: When you change the value of an input element.
 * - change: When the value of a form element changes.
 *
 * Focus Events:
 * - focus: When an element gets focused.
 * - blur: When an element loses focus.
 *
 * Window Events:
 * - load: When the whole page and all its stuff finish loading.
 * - resize: When you resize the browser window.
 * - scroll: When you scroll the page.
 */

// Example
let element = document.getElementById('myElement');
element.addEventListener('mouseover', function (event) {
    // Event handling code
});

/*
 * 4. Event Object:
 * An event object is automatically generated when an event occurs,
 * This object contains information about the event.
 */

// Accessing common properties of the event object
element.addEventListener('click', function (event) {
    console.log(event); // Logs the event object
    console.log(event.type); // Logs the type of event (e.g., click)
    console.log(event.target); // Logs the element that triggered the event
    // and more...
});

/*
 * 5. Event Propagation:
 * Event propagation refers to the order in which events are handled when an event occurs
 * on a nested DOM structure.
 * There are two phases of event propagation: capturing phase and bubbling phase.
 */

/*
 * <div class="outer" id="outer">
 *     Outer
 *     <div class="inner" id="inner">
 *         Inner
 *     </div>
 * </div>
 */

let outer = document.getElementById('outer');
let inner = document.getElementById('inner');

/*
 * 5. Event Propagation: Event Bubbling (default)
 * When an event occurs on an element, it bubbles up through its ancestors.
 * We can use event.stopPropagation() to stop the bubbling phase.
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
 * 5. Event Propagation: Event Capturing
 * The event is captured first by the outermost element and then propagated to the inner elements.
 * Can be activated by setting 'true' the UseCapture parameter.
 */
outer.addEventListener('click', function (event) {
    console.log('Outer capturing phase');
}, true); // UseCapture parameter set to true for capturing phase

inner.addEventListener('click', function (event) {
    console.log('Inner capturing phase');
}, true); // UseCapture parameter set to true for capturing phase

/*
 * 6. Preventing Default Behavior:
 * Some events trigger specific browser behaviors, such as submitting a form.
 * We can prevent this default behavior.
 */

// Example: Preventing default form submission behavior
let form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form being submitted
    // Additional form code
});

/**
 * XI. Asynchronous JavaScript
 *
 * 1. Introduction
 * 2. setTimeout and setInterval
 * 3. Fetch API
 * 4. Callbacks
 * 5. Promises
 * 6. Async/Await
 */

/*
 * 1. Introduction to Asynchronous Programming
 * Asynchronous JavaScript allows code to be executed concurrently without
 * blocking the main program.
 */

/*
 * 2. setTimeout and setInterval:
 * setTimeout() executes a function after a specified delay,
 * setInterval() repeatedly executes a function at defined intervals until stopped.
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
 * 3. Fetch API:
 * The Fetch API provides a modern interface for fetching resources (such as JSON, XML, or HTML) across the network.
 * It is promise-based and offers a more flexible and powerful way to make HTTP requests compared to traditional methods like XMLHttpRequest.
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
 * 4. Callbacks:
 * Callback functions are functions passed as arguments to other functions
 * to be executed later.
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
 * 5. Promises:
 * Promises are like a guarantee that something will happen in the future,
 * either success or failure, of an action.
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
 * 6. Async/Await:
 * Async/Await is a modern feature built on top of promises,
 * It makes asynchronous code look more like synchronous code with cleaner syntax.
 *
 * Async: To indicate that the function is asynchronous.
 * Await: Used inside async functions to wait for promises before moving to the next line.
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


/**
 * XII. Error Handling
 *
 * 1. Introduction to Error Handling
 * 2. try...catch Statement
 * 3. Error Object
 * 4. Throwing Errors
 * 5. Custom Error Handling
 */

/*
 * 1. Introduction to Error Handling:
 * Handle unexpected or erroneous situations that may occur and prevent program crashes.
 */

/*
 * 2. try...catch Statement:
 * Used to handle errors within a block of code.
 */
try {
    // Code that might throw an error
    throw new Error('An error occurred');
} catch (error) {
    // Error handling logic
    console.error('Error:', error.message);
}

/*
 * 3. Error Object:
 * Is a built-in object that provides information about errors
 */
try {
    throw new Error('An error occurred');
} catch (error) {
    console.error('Error message:', error.message);
    console.error('Error name:', error.name);
    console.error('Stack trace:', error.stack);
}

/*
 * 4. Throwing Errors:
 * You can manually throw errors using the throw statement.
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
 * 5. Custom Error Handling:
 * You can create custom error types by extending the Error object.
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
