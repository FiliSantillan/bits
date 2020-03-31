// Obtenemos el botón y el input

const input = document.querySelector("input");
const button = document.querySelector("button");

// Al dar click se obtiene lo que hay en el portapapeles y
// se agrega al input

button.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    input.value = text;
  } catch(error) {
    console.log(`Ocurrió un error: ${error}`);
  }
});