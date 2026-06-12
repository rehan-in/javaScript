"use strict"; // Treat all JavaScript code as modern JavaScript

// alert(3 + 3);
// Error: alert is not defined
// alert() is a browser API.
// Since we are running JavaScript using Node.js,
// alert() is not available.

// Good code readability is very important.
// Avoid writing multiple statements on the same line.

console.log("Hitesh");
console.log(2 + 3);

// Variables
let name = "Hitesh";
let age = 23;
let isLoggedIn = false;

// ==============================
// Primitive Data Types
// ==============================

// Number      -> Integers and floating-point values
// BigInt      -> Very large integers beyond Number limit
// String      -> Text values enclosed in quotes
// Boolean     -> true or false
// Undefined   -> Variable declared but not assigned a value
// Null        -> Intentional absence of a value
// Symbol      -> Unique identifier
// Object      -> Collection of key-value pairs

// ==============================
// typeof Operator
// Used to determine the data type
// ==============================

console.log(typeof "hello"); // string

// Undefined
console.log(typeof undefined); // "undefined"

// Null
console.log(typeof null); // "object" (historical JavaScript bug)

// Boolean
console.log(typeof true); // "boolean"

// Number
console.log(typeof 100); // "number"

// BigInt
console.log(typeof 12345678901234567890n); // "bigint"

// Symbol
console.log(typeof Symbol("id")); // "symbol"