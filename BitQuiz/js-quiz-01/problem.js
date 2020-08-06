// Problema

const balls = ["⚽️ Soccer", "🏀 Basketball", "🎾 Tennis"];

balls.push("🏐 Volleyball");
balls.push("⚾️ Baseball");

balls.pop();

console.log(balls);

// Respuesta A

["⚽️ Soccer", "🏀 Basketball", "🎾 Tennis", "🏐 Volleyball", "⚾️ Baseball"];

// Respuesta B

["⚽️ Soccer", "🏀 Basketball", "🎾 Tennis", "🏐 Volleyball"];

// Respuesta C

("❌ Uncaught TypeError: Assignment to constant variable.");

// No se puede hacer lo siguiente:

const animal = {};
animal = { type: "🐶 Dog" }; // Uncaught TypeError

const food = ["🍕 Pizza"];
const food = ["🌮 Taco"]; // Uncaught TypeError

const text = "Hello!";
text = "Hello!"; // Uncaught TypeError
const text = "Bye!"; // Uncaught TypeError
function text() {} // Uncaught TypeError

// Si se puede hacer lo siguiente:

const food = [];
food.push("🌮 Taco");
console.log(food); // ["🌮 Taco"]

food.pop();
console.log(food); // []

const animal = {};
animal.type = "🐶 Dog";
console.log(animal); // {type: "🐶 Dog"}

animal.type = "🐱 Cat";
console.log(animal); // {type: "🐱 Cat"}
