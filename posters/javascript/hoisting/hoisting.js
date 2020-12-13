// Ejemplo 01

console.log(myName);
var myName = "Fili"; // undefined

// Ejemplo 01 (hoisting)

var myName;
console.log(myName);
myName = "Fili";

// Ejemplo 02

hi("Fili"); // Hola Fili

function hi(name) {
    console.log(`Hola ${name}`);
}

// Ejemplo 02 (hoisting)

function hi(name) {
    console.log(`Hola ${name}`);
}

hi("Fili");

// Ejemplo 03

hi("Fili");
// Uncaught TypeError

var hi = function (name) {
    console.log(`Hola ${name}`);
};

// Ejemplo 04

console.log(myName);
// ReferenceError

let myName = "Fili";
