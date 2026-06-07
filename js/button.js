/*
    File: Button.js
    Purpose: Handles the mobile navigation menu toggle

    The script will listen for clicks anywhere on document and checks wether it was the hambuger that was clicked.
 */

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


