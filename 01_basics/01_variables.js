// const -> A variable declaration type whose value cannot be reassigned.
// It cannot be redeclared in the same scope.
const customerId = 12;

// Trying to update will cause an error:
// TypeError: Assignment to constant variable.
// customerId = 202;


// var -> A variable declaration type that can be reassigned
// and redeclared in the same scope.
// Because of function scope and hoisting issues, it is generally
// not recommended in modern JavaScript.
var name = "Mohammad Rehan";

// Redeclaration is allowed
// var name = "Umme Fazal";


// let -> A variable declaration type that can be reassigned
// but cannot be redeclared in the same scope.
let age;
age = 500;


// Declaring a variable without let, const, or var creates
// a global variable (not recommended).
cityName = "Ambedkar Nagar";


// Print a single variable
console.log(cityName);


// Print multiple values in table format
console.table([customerId, name, age, cityName]);