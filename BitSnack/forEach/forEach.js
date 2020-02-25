// Sintaxis

array.forEach(function callback(currentValue, index, array) {
  // Código ...
}, this)

// ----------------------------------

const autos = ["🚗", "🚓", "🚑", "🚚", "🚜", "🛵"];

autos.forEach((auto, index) => {
  console.log(`${index}: ${auto}`);
})

// 0: 🚗
// 1: 🚓
// 2: 🚑
// 3: 🚚
// 4: 🚜
// 5: 🛵