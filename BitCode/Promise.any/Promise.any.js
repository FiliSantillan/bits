// BitCode

const p1 = new Promise((resolve) => setTimeout(resolve, 3000, "Resuelta en 3s"));

const p2 = new Promise((resolve) => setTimeout(resolve, 5000, "Resuelta en 5s"));

const p3 = new Promise((resolve) => setTimeout(resolve, 1000, "Resuelta en 1s"));

Promise.any([p1, p2, p3])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// Resuelta en 1s
