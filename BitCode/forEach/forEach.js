// Sintaxis

array.forEach(function callback(currentValue, index, array) {
  // Código ...
}, this);

// -------------------------------------------------

const bebidas = ["☕️", "🍷", "🍺", "🧃", "🥛"];

bebidas.forEach((bebida, index) => {
  console.log(`${index}: ${bebida}`);
});

// 0: ☕️
// 1: 🍷
// 2: 🍺
// 3: 🧃
// 4: 🥛