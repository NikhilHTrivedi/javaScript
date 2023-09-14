const name = "Nikhil"
const repoCount = 50

//console.log(name + repoCount + "Value");  **don't use this ***

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nikhil-h-t')

//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   Nikhil   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nikhil.com/nikhil%20trivedi"
console.log(url.replace('%20', '-'));

console.log(url.includes('ajay'));

console.log(gameName.split('-'));
