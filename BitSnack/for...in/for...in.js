
// Sintaxis


for (variable in objeto) {
 // Código ...
}

// Ejemplo

let gato = {
  "nombre": "Félix",
  "peso": "4.5kg",
  "edad": "5 años",
  "aspecto": "😼"
}

for (const propiedad in gato) {
  console.log(`${propiedad} ---> ${gato[propiedad]}`);
}

// nombre ---> Félix
// peso ---> 4.5kg
// edad ---> 5 años
// aspecto ---> 😼