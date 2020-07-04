// console.warn
console.warn("Esto es una advertencia");

// console.error
console.error("Esto es un error");

// console.group
console.group("Mi lista del supermercado");
console.info("Carne 🍗🥩🍖");
console.info("Frutas 🍎🍇🍉🍓");
console.info("Vegetales 🥦🥕🥒🥔");
console.info("Snacks 🍪🍫");
console.groupEnd();

// console.table
console.table([
    { nombre: "Fili", edad: 24 },
    { nombre: "Carlos", edad: 34 },
    { nombre: "Karla", edad: 28 },
]);

// console.dir
console.dir({
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
});

// console.assert
console.assert(5 > 10, "10 es mayor que 5");

// console.time
console.time();
for (let i = 0; i < 100; i++) {
    let resultado = i * i;
    console.log(resultado);
}
console.timeEnd();
