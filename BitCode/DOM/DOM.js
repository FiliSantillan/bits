// BitCode

const title = document.getElementById("title");

title.addEventListener("click", function () {
    title.classList.add("active");
    title.innerText = "Hello!";
});

// Ejemplo

let title = document.querySelector("h1");
let section = document.querySelector("section");

let a = document.createElement("a");

title.textContent = "Wow!";
a.href = "filisantillan.com";
a.textContent = "Web Site";

section.appendChild(a);
