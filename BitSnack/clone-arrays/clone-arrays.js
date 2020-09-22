// ¿Por qué no usar =? ---------------------------------

const dogs = ["Dog 01 🦮", "Dog 02 🐕‍🦺", "Dog 03 🐩"];
const dogs2 = dogs;

dogs2.push("Dog 04 🐶");

console.log(dogs2);
// ["Dog 01 🦮", "Dog 02 🐕‍🦺", "Dog 03 🐩", "Dog 04 🐶"]

console.log(dogs);
// ["Dog 01 🦮", "Dog 02 🐕‍🦺", "Dog 03 🐩", "Dog 04 🐶"]

// concat ---------------------------------------------

const original = [1, 2, 3];
const clone = [].concat(original);

clone.push(4);

console.log(clone); // [1, 2, 3, 4]
console.log(original); // [1, 2, 3]

// Array.from() --------------------------------------

const original = [1, 2, 3];
const clone = Array.from(original);

clone.push(4);

console.log(clone); // [1, 2, 3, 4]
console.log(original); // [1, 2, 3]

// slice --------------------------------------------

const original = [1, 2, 3, 4, 5];
const clone = original.slice();
const clone2 = original.slice(1, 4);

clone.push(6);

console.log(clone2); // [2, 3, 4]
console.log(clone); // [1, 2, 3, 4, 5, 6]
console.log(original); // [1, 2, 3, 4, 5]

// spread operator ----------------------------------

const original = [1, 2, 3];
const clone = [...original];

clone.push(4);

console.log(clone); // [1, 2, 3, 4]
console.log(original); // [1, 2, 3]

// deep array ---------------------------------------

let original = [1, 2, 3, [4, 5]];
let clone = [...original];

clone[0] = "🔥";
clone[3][0] = "✨";

console.log(clone); // ["🔥", 2, 3, ["✨", 5]];
console.log(original); // [1, 2, 3, ["✨", 5]];

// copy deep array ----------------------------------

let original = [1, 2, 3, [4, 5]];
let clone = JSON.parse(JSON.stringify(original));

clone[0] = "🔥";
clone[3][0] = "✨";

console.log(clone); // ["🔥", 2, 3, ["✨", 5]];
console.log(original); // [1, 2, 3, [4, 5]];

// copy deep array (function) -----------------------

function cloneArray(array) {
    return array.map(function (item) {
        return Array.isArray(item) ? cloneArray(item) : item;
    });
}

let original = [1, 2, 3, [4, 5]];
let clone = cloneArray(original);

clone[0] = "🔥";
clone[3][0] = "✨";

console.log(clone); // ["🔥", 2, 3, ["✨", 5]];
console.log(original); // [1, 2, 3, [4, 5]];
