const video = document.getElementById("video"),
    buttonActive = document.getElementById("button-active"),
    buttonDisabled = document.getElementById("button-disabled");

buttonActive.addEventListener("click", async () => {
    buttonActive.disabled = true;
    buttonDisabled.disabled = false;
    await video.requestPictureInPicture();
});

buttonDisabled.addEventListener("click", async () => {
    buttonDisabled.disabled = true;
    buttonActive.disabled = false;
    await document.exitPictureInPicture();
});

button.addEventListener("click", async () => {
    button.disabled = true;
    if (document.pictureInPictureElement === video) {
        await document.exitPictureInPicture();
        button.innerText = "Activar PIP";
    } else {
        await video.requestPictureInPicture();
        button.innerText = "Desactivar PIP";
    }
    button.disabled = false;
});
