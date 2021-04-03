const button = document.getElementById("button");

button.addEventListener("click", async () => {
    try {
        await navigator.share({
            title: "Mi sitio web",
            text: "¡Desarrollo Frontend!",
            url: "https://filisantillan.com",
        });
    } catch (error) {
        console.log(`Ocurrió un error: ${error}`);
    }
});
