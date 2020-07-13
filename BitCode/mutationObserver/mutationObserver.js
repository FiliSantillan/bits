const element = document.getElementById("element");

let observer = new MutationObserver(function (mutations) {
    for (mutation of mutations) {
        console.log(mutation.type);
    }

    observer.disconnect();
});

observer.observe(element, {
    attributes: true,
    childList: true,
    characterData: true,
});

// Sintaxis

let observer = new MutationObserver(callback);

function callback(mutations) {
    for (mutation of mutations) {
        console.log(mutation.type);
    }

    observer.disconnect();
}

observer.observe(element, options);