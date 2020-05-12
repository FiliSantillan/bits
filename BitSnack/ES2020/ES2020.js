// globalThis

button.addEventListener("click", function () {
    console.log(this); // button
    console.log(globalThis); // window
});

console.log(globalThis); // window en el navegador
console.log(globalThis); // self en web workers
console.log(globalThis); // global en Node.js

// BigInt

let num = Math.pow(2, 53) - 1; // Valor máximo de un número

console.log(++num); // 9007199254740992
console.log(++num); // 9007199254740992
console.log(++num); // 9007199254740992

let bigNum = 9007199254740991n;

console.log(++bigNum); // 9007199254740992n
console.log(++bigNum); // 9007199254740993n
console.log(++bigNum); // 9007199254740994n

typeof 10; // number
typeof 10n; // bigint

// promise.allSettled

const p1 = new Promise((resolve, reject) => resolve("Promesa resuelta"));
const p2 = new Promise((resolve, reject) => reject("Promesa rechazada"));
const p3 = new Promise((resolve, reject) => resolve("Promesa resuelta"));

Promise.allSettled([p1, p2, p3])
    .then(response => console.log(response))
    .catch(error => console.log(error));

/*
[
	{status: "fulfilled", value: "Promesa resuelta"},
	{status: "rejected", reason: "Promesa rechazada"},
  {status: "fulfilled", value: "Promesa resuelta"}
]
*/

// matchAll

const texto = "abcdefg";
const expRegular = /[a-c]/g;
const iterator = texto.matchAll(expRegular);

for (const match of iterator) {
    console.log(match);
}

// ["a", index: 0, input: "abcdefg", groups: undefined]
// ["b", index: 1, input: "abcdefg", groups: undefined]
// ["c", index: 2, input: "abcdefg", groups: undefined]

// Importación dinámica

// modulo.js
export function saludar() {
    console.log("Hola !");
}

// index.js
button.addEventListener("click", async function () {
    const modulo = await import("./modulo.js");
    modulo.saludar(); // Hola !
});
