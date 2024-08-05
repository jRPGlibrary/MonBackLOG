// Partie 1 : Tri des jeux par ordre alphabétique
gamesData.sort((a, b) => a.title.localeCompare(b.title));

// Partie 2 : Initialisation des éléments principaux
const rowsContainer = document.getElementById("rows-container");
const alphabet = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Fonction pour détecter si l'appareil est tactile
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

// Partie 3 : Boucle principale pour chaque lettre de l'alphabet
alphabet.split("").forEach((letter) => {
  const gamesForLetter = gamesData.filter((game) =>
    game.title.toUpperCase().startsWith(letter)
  );

  if (gamesForLetter.length > 0) {
    const row = document.createElement("div");
    row.classList.add("row");

    const rowTitle = document.createElement("h2");
    rowTitle.textContent = `${letter}`;
    row.appendChild(rowTitle);

    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider-container");
    sliderContainer.setAttribute(
      "aria-label",
      `Jeux vidéo commençant par la lettre ${letter}`
    );

    gamesForLetter.forEach((game) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-title", game.title);

      const cardImage = game.image
        ? game.image
        : `https://via.placeholder.com/250x140.png?text=${encodeURIComponent(
            game.title
          )}`;

      card.innerHTML = `
                        <div class="card-image" style="background-image: url('${cardImage}');" loading="lazy"></div>
                        <div class="card-content">
                            <h3 class="card-title">${game.title}</h3>
                            <p class="card-description">${game.description}</p>
                            <div class="share-icons">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                  window.location.href
                                )}" target="_blank" aria-label="Partager sur Facebook">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(
                                  game.title +
                                    " - " +
                                    game.description +
                                    " " +
                                    window.location.href
                                )}" target="_blank" aria-label="Partager sur WhatsApp">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                                <a href="https://reddit.com/submit?url=${encodeURIComponent(
                                  window.location.href
                                )}&title=${encodeURIComponent(
        game.title
      )}" target="_blank" aria-label="Partager sur Reddit">
                                    <i class="fab fa-reddit"></i>
                                </a>
                                <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                  window.location.href
                                )}&text=${encodeURIComponent(
        game.title + " - " + game.description
      )}" target="_blank" aria-label="Partager sur X (Twitter)">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-details" style="display: none;">
                            <div class="game-avis">
                                <h3>Ce que j'en pense: ${game.title}</h3>
                                <p>${
                                  game.avis ||
                                  "Aucun avis disponible pour le moment."
                                }</p>
                            </div>
                            <div class="columns-container">
                                <div class="column">
                                    <h4 class="positives">+ Points Positifs</h4>
                                    <ul>
                                        ${game.positives
                                          .map((point) => `<li>${point}</li>`)
                                          .join("")}
                                    </ul>
                                </div>
                                <div class="column">
                                    <h4 class="negatives">- Points Négatifs</h4>
                                    <ul>
                                        ${game.negatives
                                          .map((point) => `<li>${point}</li>`)
                                          .join("")}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;

      sliderContainer.appendChild(card);

      const cardDetails = card.querySelector(".card-details");

      if (isTouchDevice()) {
        // Gestion des événements tactiles
        let touchStartX = 0;
        let touchStartY = 0;

        card.addEventListener("touchstart", (e) => {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        });

        card.addEventListener("touchend", (e) => {
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          const deltaX = Math.abs(touchEndX - touchStartX);
          const deltaY = Math.abs(touchEndY - touchStartY);

          // Si le mouvement est minimal (considéré comme un tap)
          if (deltaX < 10 && deltaY < 10) {
            if (cardDetails.style.display === "none") {
              cardDetails.style.display = "block";
            } else {
              cardDetails.style.display = "none";
            }
          }
        });
      } else {
        // Gestion des événements pour les appareils non tactiles
        card.addEventListener("mouseenter", () => {
          cardDetails.style.display = "block";
        });

        card.addEventListener("mouseleave", () => {
          cardDetails.style.display = "none";
        });
      }
    });

    row.appendChild(sliderContainer);
    rowsContainer.appendChild(row);
  }
});

// Fermer les détails ouverts lorsqu'on touche en dehors d'une carte (pour les appareils tactiles)
if (isTouchDevice()) {
  document.addEventListener("touchstart", (e) => {
    if (!e.target.closest(".card")) {
      document.querySelectorAll(".card-details").forEach((details) => {
        details.style.display = "none";
      });
    }
  });
}
