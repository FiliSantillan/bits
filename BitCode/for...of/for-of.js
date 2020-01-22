// for ... of

let animales = ["🐶", "😸", "🐹"];

for(const animal of animales) {
  console.log(animal);
}
 
// 🐶 😸 🐹

// Si usamos let podemos modificar la variable animal del bloque.

for(let animal of animales) {
  animal *= 2;
  console.log(animal);
}

// 🐶 🐶 😸 😸 🐹 🐹

// También podemos iterar sobre un string.

const string = "Hola"

for(let letra of string) {
  console.log(letra);
}

// H
// o
// l
// a

