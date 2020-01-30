import { transform } from "async";

// Sintaxis

for ( variable of iterable ) {
  // Código ...
}

// Ejemplo 01

// const 
const frutas = ["🍎", "🍊", "🍓", "🍇", "🍌"];

for(const fruta of frutas) {
  console.log(fruta);
}

// 🍎 
// 🍊 
// 🍓 
// 🍇
// 🍌

// let
const animales = ["🐓", "🐈", "🐄", "🐠", "🦀"];

for (let animal of animales) {
  animal += animal;
  console.log(animal);
}

// 🐓🐓
// 🐈🐈
// 🐄🐄
// 🐠🐠
// 🦀🦀

// Ejemplo 02

let palabra = "Hola";

for(let letra of palabra) {
  console.log(letra.toUpperCase());
}

// H
// O
// L
// A

// Ejemplo 03

function imprimirArguments() {
  for(let argumento of arguments) {
    console.log(argumento);
  }
}

imprimirArguments("1️⃣", "2️⃣", "3️⃣", "4️⃣");

// 1️⃣
// 2️⃣
// 3️⃣
// 4️⃣

// Ejemplo 04

const imagenes = document.querySelectorAll("img");

for(let imagen of imagenes) {
  imagen.classList.add("lazy");
}

console.log(imagenes);

/*

NodeList(2) [img.lazy, img.logo.lazy]
  length: 2
  0: img.lazy
  1: img.logo.lazy

*/

