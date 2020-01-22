const animales = ["🐙", "🦕", "🦄"];

const [pulpo, dinosaurio, unicornio] = animales;
console.log(pulpo, dinosaurio, unicornio) // 🐙 🦕 🦄

// Asignando valor por default

const comida = ["🌭", "🍕"];

let [hotdog, pizza, taco = "🌮"] = comida;
console.log(hotdog, pizza, taco); // 🌭 🍕 🌮


// Valores de retorno

function ropa() {
  return ["👕", "👚", "👖"];
}

let [playera, blusa] = ropa();
console.log(playera, blusa); // 👕 👚


// Usando rest

const personas = ["👩‍💻", "👮‍♂️", "👨‍🍳", "👩‍🚀", "👩‍🚒"];

const [desarrollador, policia, ...otros] = personas;
console.log(desarrollador, policia, otros); // 👩‍💻 👮‍♂️ (3) ["👨‍🍳", "👩‍🚀", "👩‍🚒"]