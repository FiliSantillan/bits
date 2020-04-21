// Introducción

const fruits = {
    apple: "🍎",
    grapes: "🍇",
    orange: "🍊",
    banana: "🍌",
};

console.log(Object.values(fruits));

// ["🍎", "🍇", "🍊", "🍌"]

// Sintaxis

Object.values(object);

// Strings

const string = "Hola Mundo!";

console.log(Object.values(string));

// ["H", "o", "l", "a", " ", "M", "u", "n", "d", "o", "!"]

// Valores aleatoreos

const object = {
    576: "d",
    7: "a",
    232: "c",
    82: "b",
    3223: "e",
};

console.log(Object.values(object));

// ["a", "b", "c", "d", "e"]

// Objeto cómo valor

const food = {
    taco: "🌮",
    sushi: "🍣",
    pizza: "🍕",
    snacks: {
        chocolate: "🍫",
        cookie: "🍪",
    },
};

console.log(Object.values(food));

// ["🌮", "🍣", "🍕", {…}]

// {chocolate: "🍫", cookie: "🍪"}
