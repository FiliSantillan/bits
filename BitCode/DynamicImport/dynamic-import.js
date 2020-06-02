// Dynammic import

// hi.js
export function hi() {
    console.log("¡Hola 👋!");
}

// index.js
button.addEventListener("click", async function () {
    const module = await import("./hi.js.js");
    module.hi(); // "¡Hola 👋!"
});
