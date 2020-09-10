const ingredients = ["🥚 egg", "🥔 potato", "🌽 corn"];

const food = ingredients.map(ingredient => {
    return cook(ingredient);
});

console.log(food);

// ["🍳 fried eggs", "🍟 french fries", "🍿 popcorn"]
