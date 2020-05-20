// globalThis

button.addEventListener("click", function () {
    console.log(this); // button
    console.log(globalThis); // window
});
