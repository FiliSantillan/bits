// async
async function asyncTest() {
    return "Hello!";
}

asyncTest().then(function (result) {
    console.log(result); // Hello!
});

// await

let value = await promise;

// Manejo de errores
async function asyncTest() {
    try {
        let result = await promise;
        console.log(result); // Done! 😎
    } catch (error) {
        console.log(error);
    }
}

asyncTest();

// Sintaxis

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Done! 😎");
    }, 2000);
});

async function asyncTest() {
    let result = await promise;

    console.log(result); // Done! 😎
}

asyncTest();

// Promises vs async/await

promise
    .then(function (result) {
        console.log(result); // Done! 😎
    })
    .catch(function (error) {
        console.log(error);
    });

// VS.

async function asyncTest() {
    try {
        let result = await promise;
        console.log(result); // Done! 😎
    } catch (error) {
        console.log(error);
    }
}

asyncTest();
