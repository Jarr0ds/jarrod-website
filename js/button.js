document.addEventListener("click", (event) => {
    if (event.target.closest("#site-nav-toggle")) {
        const targetDiv = document.querySelector(".site-nav-list");

        if (targetDiv.style.display === "flex") {
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "flex";
        }
    }
});


