//data will be stored in memory and access the data that both have two categorys
//1 Primitive
//2 Non Primitive (reference type)


// Primitive 

// 7 types : String, Number, Boolean, null, undefined, 
//           symbol, BigInt 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

const bigNumber = 344564954464984846898n


// Reference (Non primitive)
// 3 types : Array, Objects, Functions 


const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "Nikhil",
    age: 26,
}

const myFunction = function() {
    console.log("Hello world");
} 


console.log(typeof bigNumber );

// https://262.ecma-international.org/5.1/#sec-11.4.3


