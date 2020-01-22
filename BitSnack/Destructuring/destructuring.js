// Ejemplo 01

let array = [10, 6, 8];

const [ diez, seis, ocho ] = array;
console.log(diez, seis, ocho); // 10 6 8

let object = { a: 50, b: 10 };

const { a, b } = object;
console.log(a, b); // 50 10


// Ejemplo 02

let a, b, c;

[a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

let x, y, z;

({x, y, z} = {x:98 , y:99, z: 100});
console.log(x, y, z) // 98 99 100


// Ejemplo 03

let [ fruta = "🍎", verdura = "🥦" ] = [ "🍐" ];
console.log(fruta, verdura) // 🍐 🥦

let { animal = "🦁", robot = "🤖" } = { animal: "🐬" };
console.log(animal, robot) // 🐬 🤖

// Ejemplo 04

function comida() {
  return ["🌮", "🌯", "🍣"]
}

const [taco, burrito, sushi] = comida();
console.log(taco, burrito, sushi); // 🌮 🌯 🍣

function monedas() {
  return { USD: "💵" , EUR: "💶", JPY: "💴" }
}

const { USD, EUR, JPY } = monedas();
console.log(USD, EUR, JPY); // 💵 💶 💴

// Ejemplo 05

const [iphone, macbook, ...otros] = ["📱", "💻", "💿", "💡", "🖨", "📦"];

console.log(iphone, macbook) // 📱 💻
console.log(otros) // (4) [💿, 💡, 🖨, 📦]



