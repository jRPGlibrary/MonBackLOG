const gamesData = [
  {
    title: "( d'autres titre à venir )",
    description: "Plus de jeux seront ajoutés prochainement."
  },
  {
    title: "Astria Ascending",
    description: "Un JRPG avec des graphismes dessinés à la main.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSauya5FE2yI8Rtsvoen7G8cma-P9vLqg74w&s"
  },
  {
    title: "Atelier Ryza",
    description: "Un RPG d'alchimie avec un style artistique charmant.",
    image:
      "https://imgs.search.brave.com/n5sGpTuVqzje-R-6s2hbJ2C3qLqXU7yL3Ek_FCuH59c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vc29mdHdh/cmUvc3dpdGNoLzcw/MDEwMDAwMDIxNTQ4/LzgyNGExNGE1YzRl/ZDdjMTgzY2NiMjJi/ZWYxMzc1YjhhZDU2/NzMzYjVhMDk5ZmNi/MDNmZjIwMzViYzUy/OTU5NzA.jpeg"
  },
  {
    title: "Atelier Ryza 2",
    description: "La suite du populaire Atelier Ryza.",
    image:
      "https://imgs.search.brave.com/1LiOTrfO5hWTBfGMC_6Zu5s9l2-bG3auuRQ9bFtRZiU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmludGVuZG8uY29t/L2V1L21lZGlhL2lt/YWdlcy8xMF9zaGFy/ZV9pbWFnZXMvZ2Ft/ZXNfMTUvbmludGVu/ZG9fc3dpdGNoXzQv/SDJ4MV9OU3dpdGNo/X0F0ZWxpZXJSeXoy/TG9zdExlZ2VuZHNB/bmRUaGVTZWNyZXRG/YWlyeV9GUl9pbWFn/ZTE2MDB3LmpwZw"
  },
  {
    title: "Dragon Quest Builder 1",
    description:
      "Un jeu de construction et d'aventure dans l'univers de Dragon Quest.",
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonQuestBuilders_image1600w.jpg"
  },
  {
    title: "Dragon Quest Builder 2",
    description: "La suite améliorée de Dragon Quest Builders.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1072420/capsule_616x353.jpg?t=1712127433"
  },
  {
    title: "Dragon Quest Heroes 1",
    description:
      "Un jeu d'action hack-and-slash dans l'univers de Dragon Quest.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/410850/capsule_616x353_french.jpg?t=1596103807"
  },
  {
    title: "Dragon Quest Heroes 2",
    description: "La suite du spin-off d'action de Dragon Quest.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/574050/capsule_616x353.jpg?t=1579778123"
  },
  {
    title: "Dragon Quest XI Definitive Edition",
    description: "Un JRPG classique avec des graphismes modernes.",
    image:
      "https://gaming-cdn.com/images/products/7643/orig/dragon-quest-xi-s-les-combattants-de-la-destinee-edition-ultime-definitive-edition-pc-jeu-steam-europe-cover.jpg?v=1684473422"
  },
  {
    title: "Final Fantasy Type-0 HD",
    description: "Un spin-off de Final Fantasy avec un gameplay d'action.",
    image:
      "https://gaming-cdn.com/images/products/855/orig/final-fantasy-type-0-hd-pc-jeu-steam-cover.jpg?v=1705402458"
  },
  {
    title: "Final Fantasy VII: Remake",
    description: "Le classique RPG de Square Enix, remasterisé.",
    image:
      "https://www.journaldujapon.com/wp-content/uploads/2020/05/SEA_END_fb_share_img_1200x630.jpg"
  },
  {
    title: "Final Fantasy VII: Rebirth",
    description: "Le classique RPG de Square Enix, remasterisé.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202308/3005/537b5208a8ee42935286a44b3b981da86d976bf54899bf98.jpg"
  },
  {
    title: "Final Fantasy VIII",
    description: "Un RPG épique avec un système de junction unique.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000019037/1f609577d7c4f00a85b762bb56fcec55f3ebba9b0ca77292ec11626f3d804dc2"
  },
  {
    title: "Final Fantasy X/X2 HD",
    description: "Deux jeux Final Fantasy emblématiques remasterisés en HD.",
    image:
      "https://gaming-cdn.com/images/products/1440/orig/final-fantasy-x-x-2-hd-remaster-hd-remaster-pc-jeu-steam-cover.jpg?v=1704208232"
  },
  {
    title: "Final Fantasy XII Zodiac Âges",
    description: "Version améliorée du douzième opus de la série.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000009746/5bcb8b7802294acb31bc57de2d50a34c1e7a3bd10d8d00f931aa297e20948196"
  },
  {
    title: "Final Fantasy XV",
    description: "Un RPG d'action dans un monde ouvert moderne.",
    image:
      "https://gaming-cdn.com/images/products/11258/orig/final-fantasy-xv-royal-edition-xbox-one-xbox-series-x-s-royal-edition-xbox-one-xbox-series-x-s-jeu-microsoft-store-etats-unis-cover.jpg?v=1705325920"
  },
  {
    title: "Final Fantasy XVI",
    description: "Le dernier opus de la célèbre série de RPG.",
    image:
      "https://fyre.cdn.sewest.net/ff-xvi/63613f54b609f28540733c42/social_share-GK0OFw6bj.jpg"
  },
  {
    title: "Like A Dragon Ishin",
    description: "Un jeu d'action-aventure se déroulant dans le Japon féodal.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1805480/capsule_616x353.jpg?t=1717079037"
  },
  {
    title: "Sword And Fairy VII",
    description: "Un RPG d'action basé sur la mythologie chinoise.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1543030/capsule_616x353.jpg?t=1677654242"
  },
  {
    title: "Xuan Yuan 7",
    description: "Un RPG d'action basé sur la mythologie chinoise.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1249800/capsule_616x353.jpg?t=1674633249"
  },
  {
    title: "Yakuza Like A Dragon",
    description: "Un RPG au tour par tour dans l'univers de Yakuza.",
    image:
      "https://images.gog-statics.com/56012eb0358a7243a1bd1d9e1590d848a3abeb3e5f6b72329abbb174f3a50196.jpg"
  }
];

// Trier les jeux par ordre alphabétique
gamesData.sort((a, b) => a.title.localeCompare(b.title));

const rowsContainer = document.getElementById("rows-container");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
            `;

      sliderContainer.appendChild(card);
    });

    row.appendChild(sliderContainer);
    rowsContainer.appendChild(row);
  }
});
