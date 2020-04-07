// Introducción

const fruits = ["🍎", "🥝", "🍇"];

console.log(fruits.includes("🍎")); // true
console.log(fruits.includes("🥥")); // false

// Sintaxis

array.includes(element, index);

// Index

const array = [1, 2, 3, 4, 5];

console.log(array.includes(3, 2)); // true
console.log(array.includes(3, 3)); // false
console.log(array.includes(3, 4)); // false

// filter e includes

const users = [
  { name: "Fili", pet: "🐶" },
  { name: "Simón", pet: "🐠" },
  { name: "Pao", pet: "😸" },
  { name: "Roman", pet: "🐷" },
  { name: "Clau", pet: "🐹" },
  { name: "Ricky", pet: "🐶" },
  { name: "Jimena", pet: "🐰" },
];

const pets = ["🐶", "🐷"];

const results = users.filter((user) => {
  return pets.includes(user.pet);
});

console.log(results);

// 0: {name: "Fili", pet: "🐶"}
// 1: {name: "Roman", pet: "🐷"}
// 2: {name: "Ricky", pet: "🐶"}
