const rotatingContainer = document.getElementById("rotatingContainer");

function beginAnimation() {
    console.log("setting animation to begin");
    if (rotatingContainer != null) {
        rotatingContainer.classList.add("animate");

        console.log("animation beginning");
    }
}

window.addEventListener("load", beginAnimation);
