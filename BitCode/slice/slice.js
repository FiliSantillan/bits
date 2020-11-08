// Bit

let original = ["🌭 Hot dog", "🍕 Pizza", "🍎 Apple", "🌮 Taco", "🥦 Broccoli"];

let clone = original.slice(3);

console.log(clone); // ["🌮 Taco", "🥦 Broccoli"]

// Sintaxis

array.slice(inicio, fin);
string.slice(inicio, fin);

// incio

let array = [1, 2, 3, 4, 5];
let clone = array.slice(2);

console.log(clone); // 3, 4, 5

// inicio - mayor o igual al array

let array = [1, 2, 3, 4, 5];
let clone = array.slice(5);

console.log(clone); // []

// fin

let array = [1, 2, 3, 4, 5];
let clone = array.slice(0, 3);

console.log(clone); // [1, 2, 3]

// fin - mayor al array

let array = [1, 2, 3, 4, 5];
let clone = array.slice(0, 10);

console.log(clone); // [ 1, 2, 3, 4, 5 ]

// Valores negativos - primer parámetro

let array = [1, 2, 3, 4, 5];
let clone = array.slice(-2);
let otherClone = array.slice(-4);

console.log(clone); // [ 4, 5 ]
console.log(otherClone); // [ 2, 3, 4, 5 ]

// Valores negativos - segundo parámetro

let array = [1, 2, 3, 4, 5];
let clone = array.slice(0, -2);
let otherClone = array.slice(1, -2);

console.log(clone); // [1, 2, 3]
console.log(otherClone); // [2, 3]

let array = [1, 2, 3, 4, 5];
let clone = array.slice(-2, -1);

console.log(clone);

// Strings

let string = "Hola Mundo, soy Fili!";

console.log(string.slice(5)); // Mundo, soy Fili!

console.log(string.slice(0, 10)); // Hola Mundo

console.log(string.slice(-5)); // Fili!

console.log(string.slice(0, -2)); // Hola Mundo, soy Fil
