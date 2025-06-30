// Tri des jeux par ordre alphabétique
// Utilisation de la variable gamesData depuis le scope global
window.gamesData.sort((a, b) => a.title.localeCompare(b.title));

// Partie 2 : Initialisation des éléments principaux
const rowsContainer = document.getElementById("rows-container");

// Création du compteur de jeux
const counterContainer = document.createElement("div");
counterContainer.id = "games-counter";
counterContainer.innerHTML = `<span>${window.gamesData.length}</span> jeux dans la collection`;
document.body.insertBefore(counterContainer, rowsContainer);

// Création du filtre par type de jeu
const gameTypes = [
  { id: "all", name: "Tous les jeux" },
  { id: "rpg", name: "RPG" },
  { id: "jrpg", name: "JRPG" },
  { id: "action-rpg", name: "Action RPG" },
  { id: "aventure", name: "Aventure" },
  { id: "fps", name: "FPS" },
  { id: "metroidvania", name: "Metroidvania" },
  { id: "tactical-rpg", name: "Tactical RPG" },
  { id: "action", name: "Action" },
  { id: "plateformer", name: "Plateformer" }
];

// Fonction pour obtenir le type de jeu, soit depuis le champ types, soit en le détectant
function getGameTypes(game) {
  // Si le jeu a déjà un champ types défini, l'utiliser
  if (game.types && Array.isArray(game.types) && game.types.length > 0) {
    return game.types;
  }
  
  // Sinon, détecter le type à partir de la description (ancienne méthode)
  const description = (game.description || "").toLowerCase();
  const title = (game.title || "").toLowerCase();
  
  const types = [];
  
  if (description.includes("rpg") && description.includes("tactique") || 
      description.includes("tactical") || description.includes("stratégie") || 
      description.includes("tactique")) {
    types.push("tactical-rpg");
  }
  
  if (description.includes("action-rpg") || description.includes("action rpg")) {
    types.push("action-rpg");
  } else if (description.includes("jrpg") || 
            (description.includes("rpg") && (title.includes("final fantasy") || 
                                           title.includes("dragon quest") || 
                                           title.includes("persona")))) {
    types.push("jrpg");
  } else if (description.includes("rpg") || description.includes("rôle")) {
    types.push("rpg");
  }
  
  if (description.includes("fps") || description.includes("first-person shooter") || 
      description.includes("tir à la première personne")) {
    types.push("fps");
  }
  
  if (description.includes("metroidvania") || 
      (description.includes("exploration") && description.includes("plateforme"))) {
    types.push("metroidvania");
  }
  
  if (description.includes("aventure")) {
    types.push("aventure");
  }
  
  if (description.includes("action")) {
    types.push("action");
  }
  
  if (description.includes("plateforme") || description.includes("platformer")) {
    types.push("plateformer");
  }
  
  return types.length > 0 ? types : ["all"];
}

// Création du conteneur de filtres
const filterContainer = document.createElement("div");
filterContainer.id = "game-filters";
document.body.insertBefore(filterContainer, rowsContainer);

// Fonction pour compter les jeux par type
function countGamesByType() {
  const typeCounts = {};
  
  // Initialiser les compteurs à 0 pour tous les types
  gameTypes.forEach(type => {
    typeCounts[type.id] = 0;
  });
  
  // Compter les jeux pour chaque type
  window.gamesData.forEach(game => {
    const types = getGameTypes(game);
    types.forEach(type => {
      if (typeCounts[type] !== undefined) {
        typeCounts[type]++;
      }
    });
  });
  
  return typeCounts;
}

// Obtenir les compteurs de jeux par type
const gameTypeCounts = countGamesByType();

// Ajout des boutons de filtre
gameTypes.forEach(type => {
  const filterButton = document.createElement("button");
  filterButton.classList.add("filter-button");
  filterButton.dataset.type = type.id;
  
  // Ajouter le nombre de jeux au texte du bouton
  const count = type.id === "all" ? window.gamesData.length : gameTypeCounts[type.id] || 0;
  filterButton.innerHTML = `${type.name} <span class="game-count">(${count})</span>`;
  
  if (type.id === "all") {
    filterButton.classList.add("active");
  }
  
  filterButton.addEventListener("click", () => {
    // Retirer la classe active de tous les boutons
    document.querySelectorAll(".filter-button").forEach(btn => {
      btn.classList.remove("active");
    });
    
    // Ajouter la classe active au bouton cliqué
    filterButton.classList.add("active");
    
    // Filtrer les jeux
    filterGamesByType(type.id);
  });
  
  filterContainer.appendChild(filterButton);
});

// Fonction pour filtrer les jeux par type
function filterGamesByType(typeId) {
  // Cacher toutes les rangées
  document.querySelectorAll(".row").forEach(row => {
    row.style.display = "none";
  });
  
  // Cacher toutes les cartes
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = "none";
  });
  
  if (typeId === "all") {
    // Afficher toutes les rangées et cartes si "Tous les jeux" est sélectionné
    document.querySelectorAll(".row").forEach(row => {
      row.style.display = "block";
    });
    document.querySelectorAll(".card").forEach(card => {
      card.style.display = "block";
    });
    
    // Mettre à jour le compteur avec le nombre total de jeux
    counterContainer.innerHTML = `<span>${window.gamesData.length}</span> jeux dans la collection`;
    return;
  }
  
  // Sélectionner toutes les cartes qui correspondent au type sélectionné
  const matchingCards = document.querySelectorAll(`.card[data-game-types*="${typeId}"]`);
  
  // Afficher les cartes correspondantes et leurs rangées
  matchingCards.forEach(card => {
    card.style.display = "block";
    const row = card.closest(".row");
    if (row) {
      row.style.display = "block";
    }
  });
  
  // Mettre à jour le compteur
  counterContainer.innerHTML = `<span>${matchingCards.length}</span> jeux de type ${gameTypes.find(type => type.id === typeId)?.name || typeId}`;
}
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
  const gamesForLetter = window.gamesData.filter((game) =>
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
      
      // Ajouter les types de jeu comme attributs de données
      const gameTypes = getGameTypes(game);
      card.setAttribute("data-game-types", gameTypes.join(" "));

      const cardInner = document.createElement("div");
      cardInner.classList.add("card-inner");

      const cardFront = document.createElement("div");
      cardFront.classList.add("card-front");

      const cardBack = document.createElement("div");
      cardBack.classList.add("card-back");

      const cardImage = game.image
        ? game.image
        : `https://via.placeholder.com/250x140.png?text=${encodeURIComponent(game.title)}`;

      cardFront.innerHTML = `
        <div class="card-image" style="background-image: url('${cardImage}');" loading="lazy"></div>
        <div class="card-content">
          <h3 class="card-title">${game.title}</h3>
          <p class="card-description">${game.description}</p>
          <div class="share-icons">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" aria-label="Partager sur Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(game.title + " - " + game.description + " " + window.location.href)}" target="_blank" aria-label="Partager sur WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(game.title)}" target="_blank" aria-label="Partager sur Reddit">
              <i class="fab fa-reddit"></i>
            </a>
            <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(game.title + " - " + game.description)}" target="_blank" aria-label="Partager sur X (Twitter)">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      `;

      cardBack.innerHTML = `
        <div class="card-details">
          <div class="game-avis">
            <h3>Ce que j'en pense: ${game.title}</h3>
            <p>${game.avis || "Aucun avis disponible pour le moment."}</p>
          </div>
          <div class="columns-container">
            <div class="column">
              <h4 class="positives">+ Points Positifs</h4>
              <ul>
                ${game.positives.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </div>
            <div class="column">
              <h4 class="negatives">- Points Négatifs</h4>
              <ul>
                ${game.negatives.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="share-icons">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" aria-label="Partager sur Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(game.title + " - " + game.description + " " + window.location.href)}" target="_blank" aria-label="Partager sur WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(game.title)}" target="_blank" aria-label="Partager sur Reddit">
              <i class="fab fa-reddit"></i>
            </a>
            <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(game.title + " - " + game.description)}" target="_blank" aria-label="Partager sur X (Twitter)">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      `;

      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      card.appendChild(cardInner);

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
            // Toggle la classe flipped pour activer l'animation CSS
            card.classList.toggle('flipped');
            
            // Empêcher le comportement par défaut pour éviter les clics indésirables
            e.preventDefault();
          }
        });
        
        // Assurer que les liens de partage fonctionnent correctement sur les appareils tactiles
        card.querySelectorAll('.share-icons a').forEach(link => {
          link.addEventListener('touchend', (e) => {
            e.stopPropagation(); // Empêcher la propagation pour éviter de retourner la carte
          });
        });
      } else {
        // Pour les appareils non tactiles, utiliser hover pour le flip
        // Le CSS .card:hover gère déjà la rotation
      }
    });

    row.appendChild(sliderContainer);
    rowsContainer.appendChild(row);
  }
});

// Fermer les cartes retournées lorsqu'on touche en dehors d'une carte (pour les appareils tactiles)
if (isTouchDevice()) {
  document.addEventListener("touchstart", (e) => {
    if (!e.target.closest(".card")) {
      document.querySelectorAll(".card.flipped").forEach((card) => {
        card.classList.remove("flipped");
      });
    }
  });
}
