async function loadCards() {
    const cardContainer = document.querySelector("#card-container");

    if (!cardContainer) {
        return;
    }

    try {
        const cardResponse = await fetch("./components/card.html");
        const dataResponse = await fetch("./data/cards.json");

        if (!cardResponse.ok) {
            throw new Error("Could not load card.html");
        }

        if (!dataResponse.ok) {
            throw new Error("Could not load cards.json");
        }

        const cardHTML = await cardResponse.text();
        const cards = await dataResponse.json();
        const today = new Date();
        cards.forEach(cardData => {
            const wrapper = document.createElement("div");
            wrapper.innerHTML = cardHTML.trim();
            const updatedDate = new Date(cardData.lastUpdated)

            const dayDifference = Math.round((updatedDate - today) / 86400000)
            const card = wrapper.firstElementChild;

            card.querySelector(".card-title").textContent = cardData.title;
            card.querySelector(".card-description").textContent = cardData.description;
            card.querySelector(".button-card-link").href = cardData.link;
            card.querySelector(".card-last-updated").textContent =
                `Last Updated | ${new Intl.RelativeTimeFormat("en", {numeric: 'auto'}).format(dayDifference, "day")}`;


            cardContainer.appendChild(card);
        });

    } catch (error) {
        console.error(error);
        cardContainer.innerHTML = "<p>Sorry, the cards could not be loaded.</p>";
    }
}

loadCards();