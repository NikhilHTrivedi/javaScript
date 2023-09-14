const score = 500
// console.log(score);
const balance = new Number(300)

// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 32.6445

// console.log(otherNumber.toPrecision(3));

const hundred = 300000000
// console.log(hundred.toLocaleString('en-IN'));

// +++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-10));   -ve convet into +ve
// console.log(Math.round(4.5));  round of any number 4.5 is 5

// console.log(Math.ceil(5.6));   type of round of but this give only up value 5.6 is 6

// console.log(Math.floor(9.5));   type of round of but this give lower value 9.5 is 9

// console.log(Math.min(54,1,654,68,68,6));  // min = 1

// console.log(Math.max(465,5,654456,3212,652,54,64)); mix = 654456

console.log(Math.random());
console.log((Math.random()*10)+ 1);
console.log(Math.floor(Math.random()*10)+ 1);

const min = 10  
const max = 20

// ************* very Importent formula ****************
console.log(Math.floor(Math.random() * (max - min +1 )) + min);