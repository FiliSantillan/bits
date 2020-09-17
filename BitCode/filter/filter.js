const food = [
    "🍎 Apple",
    "🍕 Pizza",
    "🌮 Taco",
    "🍌 Banana",
    "🥦 Broccoli",
    "🍓 Strawberry",
];

const fruits = food.filter(element => {
    return isFruit(element);
});

console.log(fruits);

// [ "🍎 Apple", "🍌 Banana", "🍓 Strawberry"]
