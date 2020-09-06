// hi.js
export function hi() {
    console.log("¡Hola 👋!");
}

// index.js
const button = document.getElementById("button");

// Al dar click se descarga el módulo
button.addEventListener("click", async function () {
    const module = await import("./hi.js");
    module.hi(); // "¡Hola 👋!"
});
