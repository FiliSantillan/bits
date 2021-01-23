// replaceAll()-------------------------------------
const comida = "🍌 🌮 🍊 🍌 🍓 🍪 🍌 🍕 ";

// replace solo cambia la primera coincidencia
const nuevaComida = comida.replace("🍌", "🥑");
// "🥑 🌮 🍊 🍌 🍓 🍪 🍌 🍕 "

// replaceAll cambia todas las coincidencias
const nuevaComida2 = comida.replaceAll("🍌", "🥑");
// "🥑 🌮 🍊 🥑 🍓 🍪 🥑 🍕 "

// Separadores numéricos --------------------------

// Sin separadores numéricos
const number = 954884492;

// Con separadores numéricos
const number = 954_884_492;

// Un millón
const millon = 1_000_000; // 1000000

// Mil millones
const milMillones = 1_000_000_000; // 1000000000

// Promise.any ----------------------------------

const p1 = new Promise((resolve) => setTimeout(resolve, 3000, "Resuelta en 3s"));

const p2 = new Promise((resolve) => setTimeout(resolve, 5000, "Resuelta en 5s"));

const p3 = new Promise((resolve) => setTimeout(resolve, 1000, "Resuelta en 1s"));

Promise.any([p1, p2, p3])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// Resuelta en 1s
