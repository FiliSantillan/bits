// Seleccionar elementos

//jQuery
$("#element");
$(".elements");

// JavaScript
document.getElementById("element");
document.getElementsByClassName("elements");

document.querySelector("#element");
document.querySelectorAll(".elements");

// Encontrar elementos dentro de otro

//jQuery
var container = $("#container");
container.find(".element");

// JavaScript
let container = document.querySelector("#container");

container.querySelector(".element");
container.querySelectorAll(".elements");

// Actualizar clases

// jQuery
$(".element").addClass("active");
$(".element").removeClass("active");
$(".element").toggleClass("active");

// JavaScript
let element = document.querySelector(".element");

element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");

// Creación de elementos

// jQuery
$("<header/>");
$("<p/>");

// JavaScript
document.createElement("header");
document.createElement("p");

// Actualización del DOM

// jQuery
$("#container").append($("<div/>"));
$("#container").prepend($("<div/>"));

// JavaScript
let element = document.createElement("div");

document.querySelector("#container").append(element);
document.querySelector("#container").prepend(element);

// Moverse en el DOM

// jQuery
$(".element").next();
$(".element").prev();
$(".element").parent();

// JavaScript
let element = document.querySelector(".element");
element.nextElementSibling;
element.previousElementSibling;
element.parentElement;

// Dando estilos a elementos

// jQuery
$(".element").css("color", "#FFD166");

$(".element").css({
  color: "#000",
  "background-color": "#FFD166",
});

// JavaScript
let element = document.querySelector(".element");

element.style.color = "#FFD166";

// Establece y anula cualquier estilo existente
element.style.cssText = "color: #000; background-color: #FFD166";

// Request de datos

// jQuery
$ajax({
  url: "https://site.com/api",
})
  .done(function (data) {
    console.log(data);
  })
  .fail(function () {
    console.log(data);
  });

// JavaScript
fetch("https://site.com/api")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// jQuery
$.ajax({
  url: "https://site.com/api/",
  type: "POST",
  data: data,
  success: function (data) {
    console.log(data);
  },
});

// JavaScript
fetch("https://site.com/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data),
})
.then(response => response.json());
.then((data) => {
  console.log(data);
})
.catch(error => {
  console.log(error);
})
