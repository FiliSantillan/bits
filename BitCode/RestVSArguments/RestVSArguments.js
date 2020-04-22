// REST

function double(...data) {
    return data.map(number => number * 2);
}

double(2, 32, 85, 12, 842);

// [4, 64, 170, 24, 1684]

// ARGUMENTS

function double() {
    const args = Array.prototype.slice.call(arguments);

    // Con ES6 se podría usar Array.from()
    const args = Array.from(arguments);

    return args.map(number => number * 2);
}

double(2, 32, 85, 12, 842);

// [4, 64, 170, 24, 1684]
