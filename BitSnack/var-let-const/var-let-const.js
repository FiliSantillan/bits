var x = 90;
let y = "Hi!";
const z = true;

// ------------------------------------ var

var animal; // undefined

var name = "Fili";

if (true) {
    var name = "Diego";

    console.log(name); // Diego
}

console.log(name); // Diego

// ------------------------------------

var name = "Fili";

function printName() {
    var name = "Diego";

    console.log(name); // Diego
}

printName();

console.log(name); // Fili

// ------------------------------------

var ball = "🏀";
ball = "⚽️";

console.log(ball); // ⚽️

var ball = "🏈";

console.log(ball); // 🏈

// ------------------------------------ let

let animal; // undefined

let name = "Fili";

if (true) {
    let name = "Diego";

    console.log(name); // Diego
}

console.log(name); // Fili

// ------------------------------------

let name = "Fili";

function printName() {
    let name = "Diego";

    if (true) {
        let name = "Mike";
        console.log(name); // Mike
    }

    console.log(name); // Diego
}

printName();

console.log(name); // Fili

// ------------------------------------

let ball = "🏀";
ball = "⚽️";

console.log(ball); // ⚽️

let ball = "🏈"; // Identifier "ball" has already been declared

// ------------------------------------ const

const animal; // Missing initializer in const declaration

const name = "Fili";

function printName() {
  const name = "Diego";

  if(true) {
    const name = "Mike";
    console.log(name); // Mike
  }

  console.log(name); // Diego
}

printName();

console.log(name); // Fili

// ------------------------------------

const ball = "🏀";
ball = "⚽️"; // Assignment to constant variable.

const ball = "🏈"; // Identifier 'ball' has already been declared