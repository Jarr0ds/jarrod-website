document.addEventListener("click", (event) => {
    if (event.target.closest("#navbar-hamburger-button")) {
        const targetDiv = document.querySelector(".hamburger-nav-links");

        if (targetDiv.style.display === "flex") {
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "flex";
        }
    }
});

document.addEventListener("click", (event) => {
    if (event.target.closest("#navbar-hamburger-button")) {
        const targetDiv = document.querySelector(".hamburger-nav-links");

        if (targetDiv.style.display === "flex") {
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "flex";
        }
    }
});