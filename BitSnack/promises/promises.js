// Sintaxis

new Promise(function (resolve, reject) { ... });

// Creation

const promiseTest = new Promise(function (resolve, reject) {

    if (condition) {
        resolve("Done");
    } else {
        reject(new Error("Oops!"));
    }

});

// Use

promiseTest
  .then(function(message) { console.log(message) })
  .catch(function(error) { console.log(error) });
