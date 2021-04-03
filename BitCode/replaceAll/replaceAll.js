const balls = "⚽️ 🏀 🥎 🏀 🏐 🎾 🎱 🏀";

// replace solo cambia la primera coincidencia
const newBalls = balls.replace("🏀", "🏈");

// replaceAll cambia todas las coincidencias
const newBalls2 = balls.replaceAll("🏀", "🏈");

console.log(newBalls);
// "⚽️ 🏈 🥎 🏀 🏐 🎾 🎱 🏀"

console.log(newBalls2);
// "⚽️ 🏈 🥎 🏈 🏐 🎾 🎱 🏈"
