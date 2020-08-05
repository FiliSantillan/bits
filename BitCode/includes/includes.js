// Ejemplo

const food = ["🍕 pizza", "🌮 taco", "🍣 sushi"];

console.log(food.includes("🍣 sushi")); // true
console.log(food.includes("🍫 chocolate")); // false

// Sintaxis

array.includes(element, index);

// index

const array = ["a", "b", "c", "d", "e"];

console.log(array.includes("c", 2)); // true

console.log(array.includes("c", 3)); // false
console.log(array.includes("e", 5)); // false

// filter e includes

const animals = ["🐠 Fish", "🐪 Camel", "🦜 Parrot", "🐕 Dog", "🐖 Pig", "🐈 Cat"];

const filter = ["🐕 Dog", "🐈 Cat"];

const results = animals.filter(animal => {
    return filter.includes(animal);
});

console.log(results); // (2) ["🐕 Dog", "🐈 Cat"]
