// globalThi

console.log(globalThis); // window

//bigInt

let bigNum = 9007199254740993n;

// promise.allSettled

Promise.allSettled([p1, p2, p3])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// Dynamic import

// module.js
export function saludar() {
    console.log("Hello !");
}

// app.js
button.addEventListener("click", async function () {
    const module = await import("./module.js");
    module.saludar();
});
