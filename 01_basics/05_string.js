const name = "rehan"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rehan-Raza-Ansari')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   rehan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rehan.com/rehan%20ansari"

console.log(url.replace('%20', '-'))

// to chech the string is in the url or not
// it will return true or false
console.log(url.includes('sundar'))

// it will break the string whereever there will be '-' char, and will convert in array
console.log(gameName.split('-'));