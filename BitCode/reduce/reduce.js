const food = ["🥣 Cereal", "🍕 Pizza", "🌮 Taco", "🍎 Apple", "🥧 Pie", "🥛 Milk"];

const poop = food.reduce(eat);

console.log(poop); // 💩

function eat(poop, item) {
    return poop + item;
}

const array = [2, 6, 9];

const result = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(result);

// Initial value

const array = [2, 6, 9];

const result = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 5);

console.log(result);
