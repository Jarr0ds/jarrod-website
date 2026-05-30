async function loadComponent(selector, filePath) {
    const element = document.querySelector(selector);

    if (!element) {
        return;
    }

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Could not load ${filePath}`);
        }

        element.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
}

loadComponent("#header-placeholder", "./components/header.html");
loadComponent("#footer-placeholder", "./components/footer.html");