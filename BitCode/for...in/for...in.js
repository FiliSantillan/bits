
// Sintaxis

for (variable in objeto) { ... }

// ----------------------------------


let persona = {
  "nombre": "Fili",
  "edad": "23",
  "profesión": "Frontend"
}

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad].toUpperCase()}`)
}

// nombre: FILI
// edad: 23
// profesión: FRONTEND
