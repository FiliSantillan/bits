// Introducción

const animals = {
  cat: "🐱",
  fish: "🐟",
  turtle: "🐢",
};

console.log(Object.entries(animals));

// [["cat", "🐱"], ["fish", "🐟"], ["turtle", "🐢"]]

// Sintaxis

Object.entries(object);

// Strings

const string = "Hola";

console.log(Object.entries(string));

// [["0", "H"], ["1", "o"], ["2", "l"], ["3", "a"]]

// for...of

const food = {
  taco: "🌮",
  sushi: "🍣",
  salad: "🥗",
  pizza: "🍕",
};

for (let [key, value] of Object.entries(food)) {
  console.log(`My food: ${key} ${value}`);
}

// My food: taco 🌮
// My food: sushi 🍣
// My food: salad 🥗
// My food: pizza 🍕

// Objeto cómo valor

const animals = {
  cat: "🐱",
  fish: "🐟",
  turtle: "🐢",
  cats: {
    john: "😺",
    rick: "🐈",
  },
};

console.log(Object.entries(animals));

// [["cat", "🐱"], ["fish", "🐟"], ["turtle", "🐢"], ["cats", {…}]]

{john: "😺", rick: "🐈"}
