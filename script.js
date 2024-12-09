const gamesData = [
  // ... Your games data here ...
  {
    title: "Aeterna Noctis",
    description:
      "Un jeu de plateforme et d'action en 2D avec des graphismes peints à la main. Explorez un monde fantastique rempli de créatures étranges. Un metroidvania où lutte le mal et le bien",
    image: "https://media.vandal.net/m/5-2023/202352510325157_1.jpg",
    positives: [
      "Graphismes peints à la main",
      "Monde fantastique immersif",
      "Le Mal VS Le Bien"
    ],
    negatives: ["Difficulté élevée", "Certaines mécaniques répétitives"]
  },
  {
    title: "Afterimage",
    description:
      "Un jeu de plateforme et d'action en 2D avec des graphismes peints à la main. Le joueur explore un monde fantastique rempli de créatures étranges et de paysages spectaculaires.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLegx_C13jM0adc054oeGYEufNkmgrEjHXuw&s",
    positives: ["Graphismes époustouflants", "Exploration captivante"],
    negatives: ["Narration faible", "Durée de vie courte"]
  },
  {
    title: "Anthem",
    description:
      "Un RPG d'action en ligne où vous incarnez un Freelancer équipé d'une exo-armure. Explorez un vaste monde ouvert, personnalisez votre Javelin et combattez aux côtés d'autres joueurs.",
    image: "https://i.ytimg.com/vi/ZFwylDNpgFc/maxresdefault.jpg",
    positives: ["Graphismes magnifiques", "Gameplay dynamique"],
    negatives: ["Problèmes de serveurs", "Contenu répétitif"]
  },
  {
    title: "Assassin's Creed Odyssey",
    description:
      "Forgez votre de Destin de Paria à légende vivante. Embarquez pour une odyssée ou vous leverez le voile sur les secret de vorte passé et changerez le destin de la Grèce Antique.",
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nhQxuqzSNJ2ow0iDWBM3oAHaEK%26pid%3DApi&sp=1733739756T8a7c7192e0ec30377c001d2436c4b14ff00a345a319ffeb2685fac88f577c64f",
    positives: ["", ""],
    negatives: ["", ""]
  },
  {
    title: "Assassin's Creed Origins",
    description:
      "L'égypte Antique. Une terre majestueuse au bord du chaos, manipulée par des forces obscures. Voyagez juqu'aux origines du credo des assassins et prenez part à ses évenements fondateurs.",
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.D7pnn3G3EGg2hEZ9srwo9gHaEK%26pid%3DApi&sp=1733740222Tdf35895a41b30a31635426f64e38a3a7c3334f2894158b2644600b70cb7d88a9",
    positives: ["", ""],
    negatives: ["", ""]
  },
  {
    title: "Assassin's Creed Syndicate",
    description:
      "Londre 1868. Au coeur de la révolution industrielle. Incarnez les jumeaux assassins Jacob et Evie Frye et menez votre dans un combat contre les oppresseurs des classes populaires.",
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.50Q40ZfyFKTOCCjqIiHZuwHaEK%26pid%3DApi&sp=1733740420T629462fec609f338c3619c06a8cea5c2e583e79ea9aee95303ede59c5e805a93",
    positives: ["", ""],
    negatives: ["", ""]
  },
  {
    title: "Astria Ascending",
    description:
      "Un JRPG avec des graphismes dessinés à la main. Plongez dans une histoire épique avec huit héros uniques et un système de combat au tour par tour stratégique.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSauya5FE2yI8Rtsvoen7G8cma-P9vLqg74w&s",
    positives: ["Graphismes dessinés à la main", "Histoire épique"],
    negatives: ["Rythme lent", "Système de combat complexe"]
  },
  {
    title: "Astro Bot",
    description:
      "Embarquez pour une aventure Gigantesque avec notre petit robot fétiche dans ce sublime jeu de plateforme rempli de références.",
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.oqgi_P-DpbHKMlRny3USigHaEK%26pid%3DApi&sp=1733739206T2bb0daabc53323789d9522f696ad6a15da6640370cd81f1c1523394c088eca52",
    positives: ["Références a gogo", "Graphisme", "Nombreux monde"],
    negatives: ["Manque certaines Références",]
  },
  {
    title: "Atelier Firis",
    description:
      "Un RPG d'alchimie où vous suivez le voyage de Firis pour devenir une alchimiste certifiée. Explorez un vaste monde ouvert et créez des objets pour résoudre des énigmes.",
    image:
      "https://imgs.search.brave.com/VIcoo584pj6PHOUjE88BDjpEOSgls01y2gHAohX8PHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcG9s/bG8yLmRsLnBsYXlz/dGF0aW9uLm5ldC9j/ZG4vVVA0MTA4L0NV/U0EwNzU5Ml8wMC9L/R2V1c1NXMDdYeHU1/UExPaEJtbkpPa1lL/S2dkOUk4by5wbmc",
    positives: ["Grande liberté d'exploration", "Système d'alchimie riche"],
    negatives: ["Graphismes datés", "Quêtes répétitives"]
  },
  {
    title: "Atelier Lulua",
    description:
      "Le quatrième volet de la série Arland, où Lulua, fille de Rorona, aspire à devenir une grande alchimiste. Combinez alchimie et exploration dans ce RPG coloré.",
    image:
      "https://imgs.search.brave.com/wnF5CZ-QDQVFCBGqeivH-a81Y6QICmEL4rCK2ucnpy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vZW5fVVMv/Z2FtZXMvc3dpdGNo/L2EvYXRlbGllci1s/dWx1YS10aGUtc2Np/b24tb2YtYXJsYW5k/LXN3aXRjaC9oZXJv",
    positives: ["Personnages attachants", "Système d'alchimie agréable"],
    negatives: ["Narration parfois lente", "Complexité des recettes"]
  },
  {
    title: "Atelier Lydie & Suelle",
    description:
      "Suivez les aventures des jumelles Lydie et Suelle dans leur quête pour gérer le meilleur atelier d'alchimie. Explorez des mondes mystérieux cachés dans des peintures.",
    image:
      "https://imgs.search.brave.com/nE2OEw1bbkBrFXBhEh7KHnXOk_7SoAz61YL4yC4oEsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGxjb21wYXJlLmNv/bS9nYW1lX3RldGll/cmUvdXBsb2FkL2dh/bWVpbWFnZS9maWxl/LzQwMjIxLmpwZy53/ZWJw",
    positives: ["Univers coloré", "Gameplay diversifié"],
    negatives: ["Durée de vie courte", "Difficulté inégale"]
  },
  {
    title: "Atelier Ryza",
    description:
      "Un RPG d'alchimie avec un style artistique charmant. Suivez Ryza et ses amis dans leur quête pour sauver leur île natale grâce à la magie de l'alchimie.",
    image:
      "https://imgs.search.brave.com/n5sGpTuVqzje-R-6s2hbJ2C3qLqXU7yL3Ek_FCuH59c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vc29mdHdh/cmUvc3dpdGNoLzcw/MDEwMDAwMDIxNTQ4/LzgyNGExNGE1YzRl/ZDdjMTgzY2NiMjJi/ZWYxMzc1YjhhZDU2/NzMzYjVhMDk5ZmNi/MDNmZjIwMzViYzUy/OTU5NzA.jpeg",
    positives: ["Style artistique charmant", "Personnages attachants"],
    negatives: ["Répétitivité des quêtes", "Difficulté faible"]
  },
  {
    title: "Atelier Ryza 2",
    description:
      "La suite du populaire Atelier Ryza. Retrouvez Ryza trois ans plus tard dans une nouvelle aventure à la capitale royale, avec de nouveaux personnages et mécaniques d'alchimie.",
    image:
      "https://imgs.search.brave.com/1LiOTrfO5hWTBfGMC_6Zu5s9l2-bG3auuRQ9bFtRZiU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmludGVuZG8uY29t/L2V1L21lZGlhL2lt/YWdlcy8xMF9zaGFy/ZV9pbWFnZXMvZ2Ft/ZXNfMTUvbmludGVu/ZG9fc3dpdGNoXzQv/SDJ4MV9OU3dpdGNo/X0F0ZWxpZXJSeXoy/TG9zdExlZ2VuZHNB/bmRUaGVTZWNyZXRG/YWlyeV9GUl9pbWFn/ZTE2MDB3LmpwZw",
    positives: ["Nouveaux personnages", "Système d'alchimie amélioré"],
    negatives: ["Similarités avec le premier opus", "Histoire prévisible"]
  },
  {
    title: "Atelier Sophie 2",
    description:
      "La suite du premier Sophie. Rejoignez Sophie dans un monde onirique où elle cherche son amie disparue tout en perfectionnant ses compétences en alchimie.",
    image:
      "https://imgs.search.brave.com/6m4hn1Di8fLJkRT4Ag-JWI6ytn4_9z7xm3UE0XC2jew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdGFudC1nYW1p/bmcuY29tL2ltYWdl/cy9wcm9kdWN0cy85/NzkyLzYxNngzNTMv/YXRlbGllci1zb3Bo/aWUtMi10aGUtYWxj/aGVtaXN0LW9mLXRo/ZS1teXN0ZXJpb3Vz/LWRyZWFtLXBjLWpl/dS1zdGVhbS1jb3Zl/ci5qcGc_dj0xNjU3/Njc3NjAw",
    positives: ["Histoire captivante", "Graphismes soignés"],
    negatives: ["Quêtes répétitives", "Durée de vie courte"]
  },
  {
    title: "Atlas Fallen",
    description:
      "Un jeu d'action-aventure où les joueurs luttent contre des créatures mythiques dans un monde désertique. Utilisez le sable comme une arme et explorez un vaste monde ouvert rempli de secrets.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAphHIWFkPTttkYY92bRcGUcGOHV_ES4uFQ&s",
    positives: ["Mécaniques de combat uniques", "Monde ouvert intrigant"],
    negatives: ["Narration faible", "Difficulté inégale"]
  },
  {
    title: "Banishers",
    description:
      "Un jeu d'action RPG où vous incarnez des chasseurs de fantômes dans un monde surnaturel. Explorez des environnements hantés, combattez des esprits malveillants et découvrez les mystères cachés de ce monde.",
    image:
      "https://cdn1.epicgames.com/spt-assets/62b3525c0dae4deebb9b66f0d17bfd3f/banishers--ghosts-of-new-eden-urj7a.jpg",
    positives: [
      "Ambiance surnaturelle immersive",
      "Gameplay mêlant action et RPG"
    ],
    negatives: ["Peut être répétitif", "Histoire parfois prévisible"]
  },
  {
    title: "Battle Chasers: Nightwar",
    description:
      "Un RPG au tour par tour inspiré des classiques japonais. Explorez des donjons générés aléatoirement, combattez avec un système stratégique et découvrez une histoire basée sur la série de comics Battle Chasers.",
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_BattleChasersNightwar.jpg",
    positives: ["Système de combat stratégique", "Art inspiré des comics"],
    negatives: ["Peut devenir grindy", "Personnages peu développés"]
  },
  {
    title: "Biomutant",
    description:
      "Un RPG d'action en monde ouvert avec un protagoniste mutant. Personnalisez votre personnage, explorez un monde post-apocalyptique, et engagez-vous dans des combats dynamiques avec une variété d'armes et de pouvoirs.",
    image:
      "https://cdn2.unrealengine.com/egs-biomutant-experiment101-g1a-00-1920x1080-7283d571f350.jpg",
    positives: ["Monde ouvert unique", "Personnalisation poussée"],
    negatives: ["Quêtes répétitives", "Narration parfois confuse"]
  },
  {
    title: "Blue Reflection: Second Light",
    description:
      "Un RPG qui suit les aventures d'un groupe de filles dotées de pouvoirs magiques. Explorez des mondes parallèles, combattez des monstres et renforcez les liens entre les personnages pour débloquer de nouvelles compétences.",
    image:
      "https://imgs.search.brave.com/CpwRIHaFWe4giwgl9539VjPnKhiSXliDYh7dHjo82yo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdGFudC1nYW1p/bmcuY29tL2ltYWdl/cy9wcm9kdWN0cy8x/MDEyMi82MTZ4MzUz/L2JsdWUtcmVmbGVj/dGlvbi1zZWNvbmQt/bGlnaHQtcGMtamV1/LXN0ZWFtLWNvdmVy/LmpwZz92PTE2NTkx/NDY0MDA",
    positives: [
      "Esthétique visuelle attrayante",
      "Système de liens entre personnages"
    ],
    negatives: ["Combat parfois simpliste", "Rythme lent au début"]
  },
  {
    title: "Borderlands The Handsome Collection",
    description:
      "",
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ENY99jNKNk5iRfdSRZdJ5wHaEK%26pid%3DApi&sp=1733740751T57661a91e9f7bfed421ed458d7434bd003e7c5d157f2215b72c3f94fd990a774",
    positives: ["", ""],
    negatives: ["", ""]
  },
  {
    title: "Borderlands 3",
    description:
      "Samez le Chaos, Mitraillez et lootez tout sur votre passage das une aventure complétement folle. En solo ou en coop, équipez un trilliard de flingues et sauvez la galaxie d'une nouvelle menace.",
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SvDfer0sPOxn5DPiKLsrTQHaEU%26pid%3DApi&sp=1733740963T54b3518862e4b2272a69087f65f67f13f8db27ae598482795e9fcfbae7a474b0",
    positives: ["", ""],
    negatives: ["", ""]
  },
  {
    title: "Call of Duty Black Ops 3",
    description:
      "Un jeu de tir à la première personne avec une campagne immersive et des modes multijoueurs compétitifs. Plongez dans un futur dystopique avec des soldats augmentés et des armes high-tech.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg?t=1646763462",
    positives: ["Multijoueur compétitif solide", "Graphismes impressionnants"],
    negatives: ["Campagne solo courte", "Microtransactions envahissantes"]
  },
  {
    title: "Captain Tsubasa Rise of New Champions",
    description:
      "Un jeu de football arcade basé sur le célèbre manga Captain Tsubasa. Vivez des matchs spectaculaires avec des tirs surpuissants et des techniques spéciales inspirées de la série.",
    image:
      "https://image.jeuxvideo.com/medias-crop-1200-675/159957/1599567951-1501-card.jpg",
    positives: ["Fidèle à l'esprit du manga", "Gameplay arcade amusant"],
    negatives: ["Manque de profondeur tactique", "Répétitif sur le long terme"]
  },
  {
    title: "C.A.R.D RPG",
    description:
      "Un jeu de rôle unique basé sur un système de cartes. Construisez votre deck, explorez des donjons générés aléatoirement et affrontez des ennemis dans des combats stratégiques.",
    image:
      "https://imgs.search.brave.com/Iwj0RN7d_sy_-hjdCICtayb_FWMQShfnHoV9PW23kXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVsbHByb2dyYW1s/YXJpbmRpci5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDUvQy5BLlIuRC5T/Li1SUEcuanBn",
    positives: ["Système de cartes innovant", "Rejouabilité élevée"],
    negatives: ["Courbe d'apprentissage abrupte", "Graphismes simples"]
  },
  {
    title: "Cat Quest + Cat Quest II",
    description:
      "Une collection de deux RPG d'action adorables mettant en scène des chats héroïques. Explorez un monde ouvert rempli d'aventures, de quêtes et de combats amusants.",
    image:
      "https://imgs.search.brave.com/b2r3eDwAA4vKDjJc2V71iaJ46baD7aAshoBtGOfLpeE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vc29mdHdh/cmUvc3dpdGNoLzcw/MDEwMDAwMDI4MzU5/Lzg5M2ZlZjg2Yjg2/MTFiODE2NWZkN2Yz/OTMwZmVlZTIzYzEy/MzZhNmVlNWQwMTRh/ODliM2Y1ZWRmYTg0/NzRjMTE",
    positives: ["Charme visuel unique", "Gameplay accessible"],
    negatives: [
      "Peut devenir répétitif",
      "Manque de profondeur pour certains joueurs"
    ]
  },
  {
    title: "Cat Quest III",
    description:
      "Dans Cat Quest III, vous incarnez un purriveur dans un monde ouvert 2.5D librement explorable grouillant de rats Pi. Vous pouvez naviguer sur les mers de votre navire pour les trésors à gogo! Mais préparez-vous au péril, car le Roi Pirate vise à vous traquer...",
    image:
      "https://imgs.search.brave.com/nxEVXoq2ymDM00nAkGPiCGfpUb0lVm2WpI7nD-FGNOM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vc29mdHdh/cmUvc3dpdGNoLzcw/MDEwMDAwMDY3ODY1/LzZhYmY5NDVkYzNh/N2VjZDE0ZWRkODcy/YTFhNjFkNGRlYzVj/N2VmMmM4MmYwNGIw/NTZiMGQyYzQ0MWM0/OThiY2M.jpeg",
    positives: ["", ""],
    negatives: ["", ""]
  },
  {
    title: "Cladun Returns: This Is Sengoku",
    description:
      "Un RPG d'action rétro se déroulant dans le Japon féodal. Créez votre personnage, explorez des donjons générés aléatoirement et combattez dans un style pixel art unique.",
    image:
      "https://imgs.search.brave.com/9t10XY5b_-NeU7N1hVFnM3lmO_AopjNEz_06QqMd8_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMS5k/bWNkbi5uZXQvdi9K/cUpPbDFWdEdHSXB5/WkpZaC94MTgw",
    positives: ["Style rétro bien exécuté", "Personnalisation poussée"],
    negatives: [
      "Peut sembler daté pour certains",
      "Difficulté parfois frustrante"
    ]
  },
  {
    title: "CodeVein",
    description:
      "Un RPG d'action sombre dans un monde post-apocalyptique. Combattez en tant que Revenant, un vampire doté de pouvoirs surnaturels, dans un style de jeu inspiré de Dark Souls.",
    image:
      "https://imgs.search.brave.com/wPh4JgQue9wZNue7FAZSQHnv_h9DcwE9Ia5GIh_oWcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/amV1eHZpZGVvLWxp/dmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9qdmwvMjAyMi8w/Ny9jb2RlLXZlaW4t/NzUweDM1Ny5qcGc",
    positives: ["Ambiance gothique captivante", "Système de combat profond"],
    negatives: ["Difficulté élevée", "Histoire parfois confuse"]
  },
  {
    title: "Crisis Core Final Fantasy VII",
    description:
      "Un remake du jeu PSP, préquelle de Final Fantasy VII. Suivez l'histoire de Zack Fair dans cette aventure RPG d'action avec des graphismes améliorés et un gameplay modernisé.",
    image:
      "https://imgs.search.brave.com/B4LGC-YR7Laz-w1O7aHY_CLnIpCArHkAJgibEvPUtZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1p/bmctY2RuLmNvbS9p/bWFnZXMvcHJvZHVj/dHMvMTIyNjMvNjE2/eDM1My9jcmlzaXMt/Y29yZS1maW5hbC1m/YW50YXN5LXZpaS1y/ZXVuaW9uLXBjLWpl/dS1zdGVhbS1ldXJv/cGUtY292ZXIuanBn/P3Y9MTY5Njg2Njkw/OQ",
    positives: ["Histoire émouvante", "Graphismes améliorés"],
    negatives: [
      "Missions secondaires répétitives",
      "Système de combat aléatoire controversé"
    ]
  },
  {
    title: "CrisTales",
    description:
      "Un RPG au tour par tour unique avec une mécanique de voyage dans le temps. Explorez un monde magnifique inspiré des contes de fées colombiens et prenez des décisions qui affectent le passé, le présent et le futur.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000021366/810f34f3cf19d23f51c1db05b52894e527226181f15e5414f3b106098a640c6f",
    positives: [
      "Direction artistique magnifique",
      "Mécanique de temps innovante"
    ],
    negatives: ["Combats parfois lents", "Certains bugs au lancement"]
  },
  {
    title: "Cyberpunk 2077",
    description:
      "Un RPG en monde ouvert se déroulant dans un futur dystopique. Incarnez V, un mercenaire cybernétiquement amélioré, et explorez Night City, une métropole obsédée par le pouvoir, le glamour et les modifications corporelles.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg",
    positives: ["Monde ouvert immersif", "Narration complexe"],
    negatives: [
      "Bugs au lancement",
      "Performances variables selon les plateformes"
    ]
  },
  {
    title: "Dark Alliance",
    description:
      "Un jeu d'action RPG basé sur l'univers de Donjons & Dragons. Combattez aux côtés de vos amis dans ce jeu coopératif, explorez des donjons dangereux et affrontez des créatures mythiques.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/623280/capsule_616x353.jpg?t=1693497645",
    positives: [
      "Gameplay coopératif amusant",
      "Univers riche de Donjons & Dragons"
    ],
    negatives: ["Bugs fréquents", "IA des ennemis médiocre"]
  },
  {
    title: "Darksiders II",
    description:
      "Un action-RPG où vous incarnez Mort, l'un des quatre Cavaliers de l'Apocalypse. Explorez un vaste monde, résolvez des énigmes et combattez des hordes d'ennemis pour prouver l'innocence de votre frère, Guerre.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/388410/header.jpg",
    positives: ["Monde vaste à explorer", "Système de combat fluide"],
    negatives: ["", ""]
  },
  {
    title: "Darksiders III",
    description:
      "Un Hack&Slash où les joueurs jouent le rôle de FURY dans sa quête pour traquer et éliminer les Sept Péchés Capitaux.. En tant que mage, FURY compte sur son fouet et sa magie pour rétablir l'équilibre entre le bien et le mal.",
    image:
      "https://imgs.search.brave.com/QA-RK1NvK_6Hq9OCjS5CH1PWkqmumjNXEY_TF1JZBiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nYW1p/bmctY2RuLmNvbS9p/bWFnZXMvcHJvZHVj/dHMvMjA2MS82MTZ4/MzUzL2RhcmtzaWRl/cnMtaWlpLXBjLWpl/dS1zdGVhbS1jb3Zl/ci5qcGc_dj0xNjg4/MzkwNjg5",
    positives: ["#", "#"],
    negatives: ["#", "#"]
  },
  {
    title: "Dead Cells Castlevania",
    description:
      "Dead Cells: Return to Castlevania est une extension mêlant l'univers de Dead Cells et celui de Castlevania. Explorez le château iconique de Dracula, affrontez des boss légendaires comme Dracula et la Mort, et découvrez des armes emblématiques dans un gameplay roguelite frénétique",
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ljwBsY-bmhV-h4JxnCRJiwHaEK%26pid%3DApi&sp=1733741398Td9becdae2e23f2f2cc9ed639595d1346df3bee4f67150af8917c692eecbae4c6",
    positives: ["#", "#"],
    negatives: ["#", "#"]
  },
  {
    title: "Destiny Connect",
    description:
      "Un RPG où vous voyagez dans le temps pour sauver la ville de Clocknee d'une catastrophe imminente. Résolvez des énigmes et combattez des ennemis mécaniques avec l'aide de vos compagnons.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/fr_CA/games/switch/d/destiny-connect-tick-tock-travelers-switch/hero",
    positives: ["Concept de voyage dans le temps", "Graphismes charmants"],
    negatives: ["Gameplay répétitif", "Histoire linéaire"]
  },
  {
    title: "Deus Ex: Mankind Divided",
    description:
      "Un RPG d'action cyberpunk développé par Eidos Montréal. Incarnez Adam Jensen, un agent augmenté, dans un monde où les tensions entre humains et augmentés sont à leur comble. Explorez un univers riche avec des choix influençant l'histoire.",
    image: "https://example.com/deus-ex-mankind-divided-image.jpg",
    positives: [
      "Univers cyberpunk immersif",
      "Système de choix et conséquences",
      "Gameplay diversifié"
    ],
    negatives: ["Histoire principale courte", "DLC nécessaires pour l'histoire complète"]
  },
  {
    title: "Devil May Cry 5 Special Edition",
    description:
      "Une version améliorée du jeu d'action stylisé avec de nouveaux personnages jouables, des graphismes améliorés et des modes de jeu supplémentaires. Incarnez Dante, Nero et Vergil dans des combats intenses contre des démons.",
    image: "https://www.devilmaycry.com/5se/assets/images/share.png",
    positives: ["Graphismes améliorés", "Nouveaux personnages jouables"],
    negatives: [
      "Peu de nouveautés pour les anciens joueurs",
      "Durée de vie courte"
    ]
  },
  {
    title: "DioField Chronicle",
    description:
      "Un RPG stratégique qui combine des éléments de fantasy et de guerre. Dirigez vos troupes sur le champ de bataille et prenez des décisions tactiques pour vaincre vos ennemis.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000045379/89b77052967271f0fc10309eeee8cd930eb3b46cefe3743b15cf3eb186436672",
    positives: ["Gameplay stratégique profond", "Histoire captivante"],
    negatives: ["Courbe d'apprentissage élevée", "Graphismes datés"]
  },
  {
    title: "Dishonored 2",
    description:
      "Un jeu d'action-aventure en vue subjective développé par Arkane Studios. Incarnez Emily Kaldwin ou Corvo Attano dans une quête pour récupérer le trône usurpé. Utilisez des pouvoirs surnaturels, gadgets et armes pour éliminer vos ennemis.",
    image: "https://example.com/dishonored-2-image.jpg",
    positives: [
      "Level design innovant",
      "Liberté d'approche dans le gameplay",
      "Ambiance immersive"
    ],
    negatives: ["IA parfois prévisible", "Quelques problèmes de performance"]
  },
  {
    title: "Dragon's Dogma II",
    description:
      "La suite très attendue du RPG d'action Dragon's Dogma. Explorez un monde ouvert rempli de créatures fantastiques et engagez-vous dans des combats dynamiques avec des compagnons IA.",
    image:
      "https://blog.fr.playstation.com/tachyon/sites/10/2023/11/2a8448dcd6f6cc96d5882a58a09c3dd1710fc334.jpeg",
    positives: ["Monde ouvert immersif", "Système de combat dynamique"],
    negatives: [
      "IA des compagnons parfois erratique",
      "Quêtes secondaires répétitives"
    ]
  },
  {
    title: "Dragon Quest Builder",
    description:
      "Un jeu de construction et d'aventure dans l'univers de Dragon Quest. Utilisez vos compétences en construction pour reconstruire des villes et combattre des monstres.",
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonQuestBuilders_image1600w.jpg",
    positives: ["Gameplay créatif", "Univers Dragon Quest charmant"],
    negatives: ["Répétitivité des tâches", "Histoire simple"]
  },
  {
    title: "Dragon Quest Builder 2",
    description:
      "La suite améliorée de Dragon Quest Builders. Construisez des structures encore plus grandes et explorez de nouvelles îles tout en combattant des ennemis et en accomplissant des quêtes.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1072420/capsule_616x353.jpg?t=1712127433",
    positives: [
      "Améliorations significatives par rapport au premier opus",
      "Exploration enrichie"
    ],
    negatives: ["Peut devenir répétitif", "Certaines mécaniques peu intuitives"]
  },
  {
    title: "Dragon Quest Heroes : Le Crépuscule de l'Arbre du Monde",
    description:
      "La suite du spin-off d'action de Dragon Quest. Incarnez des héros emblématiques de la série et combattez des hordes de monstres dans des batailles épiques.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/410850/capsule_616x353_french.jpg?t=1596103807",
    positives: ["Combats dynamiques", "Personnages emblématiques"],
    negatives: ["Scénario peu profond", "Répétitivité des combats"]
  },
  {
    title: "Dragon Quest XI Definitive Edition",
    description:
      "Un JRPG classique avec des graphismes modernes et du contenu supplémentaire. Suivez l'épopée du Luminaire dans sa quête pour sauver le monde d'Erdrea.",
    image:
      "https://gaming-cdn.com/images/products/7643/orig/dragon-quest-xi-s-les-combattants-de-la-destinee-edition-ultime-definitive-edition-pc-jeu-steam-europe-cover.jpg?v=1684473422",
    positives: ["Histoire captivante", "Graphismes magnifiques"],
    negatives: [
      "Gameplay traditionnel",
      "Quêtes secondaires parfois répétitives"
    ]
  },
  {
    title: "Dungeon Munchies",
    description:
      "Un jeu de plateforme et de cuisine où vous chassez et cuisinez des monstres pour gagner des pouvoirs. Explorez des donjons, préparez des plats et découvrez des recettes uniques.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202208/2506/c4Boa163pL4hYwlhmoqhwoWS.jpg",
    positives: ["Concept original", "Gameplay amusant"],
    negatives: ["Graphismes simples", "Peu de rejouabilité"]
  },
  {
    title: "Edge Of Eternity",
    description:
      "Un RPG au tour par tour se déroulant dans un monde de fantasy en proie à une guerre et à une mystérieuse corruption. Suivez Daryon et Selene dans leur quête pour sauver leur monde.",
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EdgeOfEternity_MidgarStudio_S3_2560x1440-81a646b96c49e82f758a2dc625fe5802",
    positives: ["Monde vaste et détaillé", "Histoire captivante"],
    negatives: ["Quelques bugs au lancement", "Combats parfois répétitifs"]
  },
  {
    title: "Eiyuden Chronicle: Hundred Heroes",
    description:
      "Un RPG tactique qui rend hommage aux classiques du genre. Recrutez plus de 100 personnages uniques et engagez-vous dans des batailles stratégiques pour sauver votre royaume.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1658280/capsule_616x353.jpg?t=1720811443",
    positives: [
      "Grande variété de personnages",
      "Système de combat stratégique"
    ],
    negatives: [
      "Peut être intimidant pour les nouveaux joueurs",
      "Gestion de l'équipe parfois complexe"
    ]
  },
  {
    title: "Eiyuden Chronicle: Rising",
    description:
      "Un action-RPG qui sert de préquelle à Eiyuden Chronicle: Hundred Heroes. Explorez des ruines anciennes, combattez des monstres et découvrez les histoires des personnages principaux.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000044258/a35a23f6576a9ddec3ecab8d604cb3e336ae6c093da3744c83bc2147fbf3091e",
    positives: ["Gameplay fluide", "Introduction intéressante à l'univers"],
    negatives: [
      "Durée de vie relativement courte",
      "Moins de profondeur que le jeu principal"
    ]
  },
  {
    title: "Elden Ring",
    description:
      "Un RPG d'action en monde ouvert par les créateurs de Dark Souls. Explorez un vaste monde interconnecté, combattez des ennemis redoutables et découvrez les secrets de l'Elden Ring.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png",
    positives: [
      "Monde ouvert immense et détaillé",
      "Combats exigeants et satisfaisants"
    ],
    negatives: [
      "Difficulté élevée",
      "Peut être frustrant pour certains joueurs"
    ]
  },
  {
    title: "Ender Lilies",
    description:
      "Un metroidvania sombre où vous incarnez Lily, une prêtresse explorant un royaume ravagé par une pluie maudite. Libérez des esprits pour les utiliser en combat et découvrez une histoire empreinte de mélancolie.",
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Ffr_CA%2Fgames%2Fswitch%2Fe%2Fender-lilies-quietus-of-the-knights-switch%2Fhero&sp=1733742141Tf8ea09004ff38d2a827a420307733f68e227a519e1ce468d978af1a9d8353ec2",
    positives: [
      "Histoire captivante",
      "Gameplay jouissif"
    ],
    negatives: [
      "",
      ""
    ]
  },
  {
    title: "Exist Archive",
    description:
      "Un RPG au tour par tour où vous explorez des donjons et combattez des ennemis dans un monde parallèle. Découvrez les mystères de ce monde et les secrets de votre propre existence.",
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2016/10/Exist-Archive-Logo.jpg",
    positives: ["Système de combat unique", "Histoire intrigante"],
    negatives: ["Graphismes datés", "Progression parfois lente"]
  },
  {
    title: "FairyTale",
    description:
      "Un RPG d'action enchanteur où vous incarnez une jeune fée dans un monde magique. Explorez des royaumes féeriques, résolvez des énigmes et affrontez des créatures mythiques pour sauver votre royaume.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70070000010761/f24813812527737efecdeba972400f74486be544314852c93eaa2e80d893ea4a",
    positives: ["Ambiance magique et féerique", "Énigmes intéressantes"],
    negatives: ["Gameplay parfois simpliste", "Durée de vie courte"]
  },
  {
    title: "Final Fantasy Type-0 HD",
    description:
      "Un spin-off de Final Fantasy avec un gameplay d'action. Dirigez une équipe de 14 cadets magiques dans des missions de combat intenses pour libérer leur nation de l'oppression impériale.",
    image:
      "https://gaming-cdn.com/images/products/855/orig/final-fantasy-type-0-hd-pc-jeu-steam-cover.jpg?v=1705402458",
    positives: ["Système de combat dynamique", "Grande variété de personnages"],
    negatives: ["Graphismes datés", "Histoire complexe"]
  },
  {
    title: "Final Fantasy VII: Remake",
    description:
      "Une réinvention moderne du classique RPG de Square Enix. Revivez l'histoire de Cloud et ses amis à Midgar avec des graphismes époustouflants et un système de combat repensé mêlant action et stratégie.",
    image:
      "https://www.journaldujapon.com/wp-content/uploads/2020/05/SEA_END_fb_share_img_1200x630.jpg",
    positives: ["Graphismes magnifiques", "Système de combat innovant"],
    negatives: [
      "Histoire incomplète",
      "Certains éléments de gameplay controversés"
    ]
  },
  {
    title: "Final Fantasy VII: Rebirth",
    description:
      "La suite très attendue de Final Fantasy VII Remake. Continuez l'aventure de Cloud et ses compagnons au-delà de Midgar, explorant un vaste monde ouvert rempli de nouveaux défis et de révélations.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202308/3005/537b5208a8ee42935286a44b3b981da86d976bf54899bf98.jpg",
    positives: ["Exploration étendue", "Nouveaux défis et révélations"],
    negatives: [
      "Attente longue entre les épisodes",
      "Peut être déroutant pour les nouveaux joueurs"
    ]
  },
  {
    title: "Final Fantasy VIII Remastered",
    description:
      "Un RPG épique avec un système de junction unique, maintenant en HD. Suivez Squall et les SeeDs dans leur lutte contre une sorcière menaçant de comprimer le temps.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000019037/1f609577d7c4f00a85b762bb56fcec55f3ebba9b0ca77292ec11626f3d804dc2",
    positives: ["Système de junction innovant", "Graphismes améliorés"],
    negatives: ["Certaines mécaniques datées", "Histoire complexe"]
  },
  {
    title: "Final Fantasy X/X2 HD",
    description:
      "Deux jeux Final Fantasy emblématiques remasterisés en HD. Vivez l'histoire émouvante de Tidus et Yuna dans FFX, puis poursuivez l'aventure dans le monde coloré de FFX-2.",
    image:
      "https://gaming-cdn.com/images/products/1440/orig/final-fantasy-x-x-2-hd-remaster-hd-remaster-pc-jeu-steam-cover.jpg?v=1704208232",
    positives: ["Histoires émouvantes", "Graphismes remasterisés"],
    negatives: ["FFX-2 moins apprécié", "Certaines mécaniques vieillissantes"]
  },
  {
    title: "Final Fantasy XII Zodiac Age",
    description:
      "Version améliorée du douzième opus de la série. Explorez le monde d'Ivalice dans cette aventure politique et fantastique, avec un système de combat innovant et des graphismes remasterisés.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000009746/5bcb8b7802294acb31bc57de2d50a34c1e7a3bd10d8d00f931aa297e20948196",
    positives: ["Système de combat innovant", "Graphismes remasterisés"],
    negatives: ["Histoire complexe", "Peut sembler daté pour certains"]
  },
  {
    title: "Final Fantasy XV",
    description:
      "Un RPG d'action dans un monde ouvert moderne. Accompagnez le prince Noctis et ses amis dans un road trip épique mêlant technologie avancée et magie ancestrale.",
    image:
      "https://gaming-cdn.com/images/products/11258/orig/final-fantasy-xv-royal-edition-xbox-one-xbox-series-x-s-royal-edition-xbox-one-xbox-series-x-s-jeu-microsoft-store-etats-unis-cover.jpg?v=1705325920",
    positives: ["Monde ouvert immersif", "Personnages attachants"],
    negatives: ["Histoire décousue", "Quêtes secondaires répétitives"]
  },
  {
    title: "Final Fantasy XVI",
    description:
      "Le dernier opus de la célèbre série de RPG. Plongez dans un monde médiéval-fantastique où la politique et les invocations s'entrechoquent dans une histoire mature et épique.",
    image:
      "https://fyre.cdn.sewest.net/ff-xvi/63613f54b609f28540733c42/social_share-GK0OFw6bj.jpg",
    positives: ["Histoire mature et complexe", "Graphismes époustouflants"],
    negatives: [
      "Peut être trop sombre pour certains",
      "Gameplay parfois répétitif"
    ]
  },
  {
    title: "Forspoken",
    description:
      "Un RPG d'action-aventure où vous incarnez Frey, une New-Yorkaise transportée dans un monde fantastique. Maîtrisez la magie et le parkour pour explorer un vaste monde ouvert et affronter des créatures corrompues.",
    image:
      "https://cdn1.epicgames.com/offer/a472b0f2f2a5493d960a941f01cf3393/EGS_Forspoken_LuminousProductions_S1_2560x1440-f2f99882e9d396b21fb65735d266385a_2560x1440-f2f99882e9d396b21fb65735d266385a",
    positives: ["Mécaniques de parkour innovantes", "Monde ouvert riche"],
    negatives: ["Narration inégale", "Performances variables"]
  },
  {
    title: "Godfall",
    description:
      "Un RPG d'action où vous affrontez des ennemis dans un monde de haute fantaisie. Utilisez des armures légendaires appelées Valorplates pour vaincre des hordes d'ennemis et des boss puissants.",
    image:
      "https://cdn.gamekult.com/images/gallery/34/348571/godfall-pc-ps5-1e367c7b.jpg",
    positives: ["Graphismes impressionnants", "Système de combat dynamique"],
    negatives: ["Contenu répétitif", "Histoire peu développée"]
  },
  {
    title: "Grandblue Fantasy: ReLink",
    description:
      "Un action-RPG basé sur le populaire jeu mobile Granblue Fantasy. Explorez un monde vaste et magnifique, engagez-vous dans des combats dynamiques et découvrez une histoire épique avec des personnages mémorables.",
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2023/01/Granblue-Fantasy-Relink-HD-scaled.jpg",
    positives: ["Monde vaste et détaillé", "Combats fluides et spectaculaires"],
    negatives: [
      "Peut être déroutant pour les nouveaux venus",
      "Certaines quêtes répétitives"
    ]
  },
  {
    title: ".Hack//G.U. Last Recode",
    description:
      "Une collection remasterisée de la trilogie .hack//G.U. avec un nouvel épisode. Plongez dans un MMORPG simulé, incarnez Haseo dans sa quête pour sauver son ami et découvrez les mystères derrière le jeu 'The World'.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000039876/98e4d1676ceb6fd61a210429a26c7a6ae3627c765e2875adbcc270965b940432",
    positives: [
      "Histoire captivante",
      "Contenu supplémentaire avec le nouvel épisode"
    ],
    negatives: ["Graphismes datés", "Gameplay répétitif"]
  },
  {
    title: "Hogwarts Legacy",
    description:
      "Un RPG d'action en monde ouvert dans l'univers de Harry Potter. Explorez Poudlard, apprenez des sorts, préparez des potions, et découvrez des secrets tout en façonnant votre propre héritage magique.",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000014724/72ce0a17215521a167c3da579db4cc48a2f7a52eacc81ad985ba20fd6817fdc2",
    positives: [
      "Exploration immersive de Poudlard",
      "Grande variété de sorts et de potions"
    ],
    negatives: ["Performances variables", "Certaines quêtes répétitives"]
  },
  {
    title: "Kingdom Hearts The Story So Far",
    description:
      "Une collection regroupant les jeux principaux de la série Kingdom Hearts. Revivez l'aventure de Sora, Donald et Dingo à travers différents mondes Disney et Square Enix.",
    image:
      "https://www.animenewsnetwork.com/thumbnails/crop600x315gPP/cms/news.2/137799/kh-story-so-far.jpg",
    positives: [
      "Collection complète de la saga",
      "Excellente valeur pour les nouveaux joueurs"
    ],
    negatives: [
      "Peut être écrasant pour les débutants",
      "Certains jeux plus anciens ont mal vieilli"
    ]
  },
  {
    title: "Kingdom Hearts HD 2.8",
    description:
      "Une compilation incluant Kingdom Hearts Dream Drop Distance HD, Kingdom Hearts 0.2 Birth by Sleep, et le film Kingdom Hearts χ Back Cover. Préparez-vous pour Kingdom Hearts III.",
    image:
      "https://cdn1.epicgames.com/c8ff067c1c984cd7ab1998e8a9afc8b6/offer/EGS_KINGDOMHEARTSHD28FinalChapterPrologue_SquareEnix_S5-1920x1080-bdc8f514d3488ea8484639733b01b09e.jpg",
    positives: ["Graphismes améliorés", "Contenu préparatoire pour KH3"],
    negatives: [
      "Durée de jeu relativement courte",
      "Histoire complexe pour les nouveaux venus"
    ]
  },
  {
    title: "Kingdom Hearts III",
    description:
      "Le troisième opus principal de la série. Sora et ses amis affrontent l'Organisation XIII dans une aventure épique à travers de nouveaux mondes Disney et Pixar.",
    image:
      "https://cdn1.epicgames.com/0712176b5e3e49bfa8866c0ee1359f2d/offer/EGS_KINGDOMHEARTSIIIReMindDLC_SquareEnix_S1-2560x1440-5044e506e523e5ff52628d1060699062.jpg",
    positives: ["Graphismes époustouflants", "Nouveaux mondes Disney et Pixar"],
    negatives: [
      "Histoire complexe pour les non-initiés",
      "Certains trouvent le gameplay trop facile"
    ]
  },
  {
    title: "Les Sims 4",
    description:
      "Un jeu de simulation de vie où vous créez et contrôlez des personnages, construisez des maisons et façonnez leur destin dans un monde rempli de possibilités et d'interactions sociales.",
    image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia.contentapi.ea.com%2Fcontent%2Fdam%2Feacom%2FSIMS%2Fbrand-refresh-assets%2Fimages%2F2019%2F07%2Fts4-featured-image-base-refresh.png.adapt.crop191x100.1200w.png&sp=1733742895Tc63f3a882c79e53d5e9ca49afdd114bcfddbfc8c41c8bb8daa19dd6f613f6cc9",
    positives: ["Personnalisation avancée", "Graphismes améliorés "],
    negatives: [
      "Contenu de base limité",
      "Absence de monde ouvert",
      "Dépendance aux DLC"
    ]
  },
  {
    title: "Like A Dragon",
    description:
      "Un RPG au tour par tour dans l'univers de Yakuza. Incarnez Ichiban Kasuga dans une aventure pleine d'humour et d'action dans les rues de Yokohama.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1235140/header.jpg",
    positives: ["Histoire captivante", "Mélange réussi de sérieux et d'humour"],
    negatives: [
      "Changement de gameplay par rapport aux précédents Yakuza",
      "Certaines quêtes secondaires répétitives",
      "Pic difficulté trop violent"
    ]
  },
  {
    title: "Like A Dragon: Infinite Wealth",
    description:
      "La suite de Yakuza: Like a Dragon, continuant l'histoire d'Ichiban Kasuga. Cette fois-ci, l'aventure se déroule à Hawaii, mêlant l'action des yakuzas à l'ambiance tropicale.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/like-a-dragon-infinite-wealth-file-123384a0fe.jpg.webp",
    positives: ["Nouveau cadre exotique", "Amélioration du système de combat"],
    negatives: [
      "Peut être déroutant pour les nouveaux venus",
      "Certains éléments de gameplay répétitifs"
    ]
  },
  {
    title: "Like A Dragon: Ishin",
    description:
      "Un jeu d'action-aventure se déroulant dans le Japon féodal. Incarnez un samouraï cherchant à venger la mort de son mentor tout en naviguant dans les intrigues politiques de l'époque.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1805480/capsule_616x353.jpg?t=1717079037",
    positives: [
      "Ambiance immersive du Japon féodal",
      "Système de combat varié",
      "Arbres de compétences asser vaste"
    ],
    negatives: [
      "Peut être répétitif",
      "Histoire parfois prévisible",
      "Mini-jeux difficile"
    ],
    avis:
      "Après une trentaine d'heures, proche des quarante, je peux dire que j'ai apprécié l'histoire. Le gameplay ainsi que sa variété d'armes permettent de se forger un style unique grâce à chaque arbre de compétences. Cependant, pour moi, le point noir reste les quêtes beaucoup trop présentes et les mini-jeux, comme tous les jeux de cartes, etc., où je vous avoue ne rien avoir compris. Yakuza Ishin reste un très bon jeu que je conseille fortement."
  },
  {
    title: "Lord of the Fallen 2",
    description:
      "Une suite du jeu d'action RPG soulslike. Explorez un vaste monde interconnecté, affrontez des boss redoutables et choisissez votre classe pour vaincre le dieu démoniaque Adyr.",
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/1501750/header.jpg",
    positives: [
      "Graphismes impressionnants",
      "Monde vaste et interconnecté",
      "Système de combat amélioré"
    ],
    negatives: [
      "Peut être très difficile pour certains joueurs",
      "Histoire parfois confuse"
    ]
  },
  {
    title: "Mato Anomalies",
    description:
      "Un RPG d'enquête cyberpunk se déroulant dans une version futuriste de Shanghai. Incarnez le détective Doe et le combattant d'exorcisme Gram pour résoudre des mystères et combattre des démons.",
    image:
      "https://imgs.search.brave.com/l5fZ4GzUO-S_3NSFpqxg_d881tEzUijGCA60UDLdLcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGxjb21wYXJlLmNv/bS9nYW1lX3RldGll/cmUvdXBsb2FkL2dh/bWVpbWFnZS9maWxl/L21hdG8tYW5vbWFs/aWVzLXRldGllcmUt/ZmlsZS0yOTM0NGEz/OS5qcGc",
    positives: [
      "Ambiance cyberpunk unique",
      "Mélange intéressant d'enquête et de combat"
    ],
    negatives: ["Histoire parfois confuse", "Combats répétitifs"]
  },
  {
    title: "Metal Gear Solid V: The Phantom Pain",
    description:
      "Un jeu d'infiltration en monde ouvert développé par Kojima Productions. Suivez Snake dans une mission de vengeance à travers l'Afghanistan et l'Afrique centrale, en utilisant furtivité, stratégie et un vaste arsenal d'armes.",
    image: "https://example.com/mgs-phantom-pain-image.jpg",
    positives: [
      "Monde ouvert détaillé",
      "Gameplay varié et flexible",
      "Histoire captivante"
    ],
    negatives: ["Narration fragmentée", "Fin abrupte"]
  },
  {
    title: "Metal Gear Survive",
    description:
      "Un spin-off de la série Metal Gear qui se concentre sur la survie et la coopération. Les joueurs doivent construire des bases, collecter des ressources et combattre des créatures dans un univers alternatif.",
    image: "https://example.com/metal-gear-survive-image.jpg",
    positives: [
      "Coopération multijoueur",
      "Système de survie engageant"
    ],
    negatives: ["Manque d'originalité", "Microtransactions"]
  },
  {
    title: "Monochrome Mobius",
    description:
      "Un RPG tactique se déroulant dans l'univers d'Utawarerumono. Suivez l'histoire d'Oshtor dans un monde fantastique mêlant mythologie et politique.",
    image:
      "https://imgs.search.brave.com/PoVn0YKhFczxCvhDh-mS4iMSjOoTJv_8x1_jwbYpGA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYWdl/ZWtyb29tLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/OC9tb25vY2hyb21l/LTgwMHg0NDUuanBn",
    positives: [
      "Riche univers fantastique",
      "Système de combat tactique profond"
    ],
    negatives: [
      "Peut être déroutant pour les nouveaux venus",
      "Rythme parfois lent"
    ]
  },
  {
    title: "Neo: The World Ends With You",
    description:
      "Suite du jeu culte The World Ends With You. Participez au Jeu des Reapers dans les rues de Shibuya, Tokyo, avec un nouveau casting de personnages.",
    image:
      "https://imgs.search.brave.com/YvaawyNoRV39HNmSpX_OxSV4tpIsgHCOUKcZxiXl8C8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmludGVuZG8tdG93/bi5mci93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wNy9OZW9U/aGVXb3JsZEVuZHNX/aXRoWW91LmpwZw",
    positives: ["Style visuel unique", "Système de combat dynamique"],
    negatives: ["Histoire parfois complexe", "Peut sembler répétitif"]
  },
  {
    title: "Nexomon Extinction",
    description:
      "Un jeu de capture de monstres inspiré des classiques du genre. Explorez un monde coloré, capturez et entraînez des Nexomon pour sauver le monde.",
    image:
      "https://imgs.search.brave.com/pnOS_jwHPyvYm8T7Ji34yBRg5Y5HEwM4u_0eySc9gYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5qZXV4dmlkZW8u/Y29tL21lZGlhcy1t/ZC8xNjAwODUvMTYw/MDg0OTU2MC02MjA1/LWNhcmQuanBn",
    positives: ["Grande variété de créatures", "Histoire engageante"],
    negatives: ["Formule très familière", "Peut manquer d'innovation"]
  },
  {
    title: "Nier Automata",
    description:
      "Un RPG d'action post-apocalyptique où vous incarnez des androïdes combattant pour le compte de l'humanité. Découvrez une histoire profonde à travers de multiples fins.",
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/524220/capsule_616x353.jpg?t=1696405478",
    positives: ["Narration complexe et captivante", "Gameplay fluide et varié"],
    negatives: [
      "Quêtes secondaires répétitives",
      "Peut nécessiter plusieurs parties pour tout comprendre"
    ]
  },
  {
    title: "Ni No Kuni Remastered",
    description:
      "Version remastérisée du RPG enchanteur de Level-5 et Studio Ghibli. Suivez Oliver dans sa quête pour sauver sa mère à travers un monde magique.",
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/798460/capsule_616x353.jpg?t=1693523220",
    positives: ["Direction artistique magnifique", "Histoire touchante"],
    negatives: ["Combats parfois frustrants", "Rythme inégal"]
  },
  {
    title: "Ni No Kuni II: Revenant Kingdom",
    description: "Un RPG d'action enchanteur qui suit le jeune roi Evan dans sa quête pour bâtir un nouveau royaume. Avec un système de combat en temps réel, la gestion d'un royaume et des graphismes inspirés du Studio Ghibli.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/589360/header.jpg",
    positives: ["Graphismes magnifiques", "Gameplay varié"],
    negatives: ["Histoire parfois simpliste", "Combats potentiellement répétitifs"]
  },
  {
    title: "Octopath Traveler II",
    description:
      "Un RPG au tour par tour avec un style graphique HD-2D unique. Suivez les histoires entrelacées de huit voyageurs différents dans le monde de Solistia.",
    image:
      "https://imgs.search.brave.com/dMKS0U4dkGDRPfJ6sUzlxwp2sGAnvSKNR87KmQu38SQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1p/bmctY2RuLmNvbS9p/bWFnZXMvbmV3cy9h/cnRpY2xlcy82NzI2/L2NvdmVyLzEwMDB4/NTYzL29jdG9wYXRo/LXRyYXZlbGVyLTIt/cG91cnJhaXQtYXJy/aXZlci1zdXItbGEt/eGJveC1ldC1sZS1n/YW1lLXBhc3MtY2Ut/bW9pcy1jaS1zZWxv/bi1kZXMtcnVtZXVy/cy1jb3ZlcjY2NWYz/NTdkMDIyNzYuanBn",
    positives: [
      "Graphismes HD-2D magnifiques",
      "Histoires multiples et entrelacées"
    ],
    negatives: [
      "Peut sembler répétitif",
      "Certaines histoires plus faibles que d'autres"
    ]
  },
  {
    title: "One Piece Odyssey",
    description:
      "Un RPG basé sur le célèbre manga One Piece. Rejoignez Luffy et son équipage dans une nouvelle aventure, explorez des îles mystérieuses et combattez des ennemis redoutables.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814000/capsule_616x353.jpg?t=1703657096",
    positives: ["Fidèle à l'univers du manga", "Système de combat stratégique"],
    negatives: ["Peut être répétitif", "Rythme parfois lent"]
  },
  {
    title: "Persona 5 Royal",
    description:
      "L'édition définitive du JRPG acclamé Persona 5. Incarnez le leader des Voleurs Fantômes et changez les cœurs corrompus de la société tout en menant une double vie d'étudiant.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/945f-persona_5_royal.jpeg.webp",
    positives: [
      "Histoire captivante",
      "Système de combat au tour par tour raffiné"
    ],
    negatives: ["Très long", "Peut être écrasant pour les nouveaux venus"]
  },
  {
    title: "Persona 5 Strikers",
    description:
      "Un spin-off action-RPG de Persona 5. Rejoignez les Voleurs Fantômes pour une aventure à travers le Japon, combinant l'action frénétique des musou avec les éléments RPG de la série Persona.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/75239.jpg.webp",
    positives: [
      "Mélange réussi d'action et de RPG",
      "Retrouvailles avec les personnages appréciés"
    ],
    negatives: [
      "Histoire moins développée que Persona 5",
      "Peut devenir répétitif"
    ]
  },
  {
    title: "Sakuna: Of Rice and Ruin",
    description:
      "Un mélange unique de simulation agricole et de jeu de plateforme d'action. Incarnez Sakuna, une déesse déchue, qui doit cultiver du riz et combattre des démons pour racheter ses fautes.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/74677.jpg.webp",
    positives: ["Mélange original de gameplay", "Graphismes charmants"],
    negatives: [
      "Peut devenir répétitif",
      "Courbe d'apprentissage abrupte pour la culture du riz"
    ]
  },
  {
    title: "Scarlet Nexus",
    description:
      "Un RPG d'action dans un futur dystopique avec des pouvoirs psychiques. Incarnez des membres d'une unité d'élite luttant contre des créatures étranges appelées 'Autres'.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/9d3e-scarlet_nexus.jpeg.webp",
    positives: [
      "Système de combat unique avec pouvoirs psychiques",
      "Design visuel attrayant"
    ],
    negatives: ["Histoire parfois confuse", "Missions secondaires répétitives"]
  },
  {
    title: "SD Gundam Battle Alliance",
    description:
      "Un jeu d'action basé sur la franchise Gundam. Pilotez des mechas SD dans des batailles intenses à travers différentes époques de l'univers Gundam.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/sd-gundam-battle-alliance-file-917139655.jpeg.webp",
    positives: [
      "Grande variété de mechas",
      "Gameplay satisfaisant pour les fans"
    ],
    negatives: ["Peut être répétitif", "Peu accessible aux non-initiés"]
  },
  {
    title: "Sea of Stars",
    description:
      "Un RPG au tour par tour inspiré des classiques du genre. Suivez deux Enfants du Solstice dans leur quête pour vaincre les créations maléfiques de l'Alchimiste.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/sea-of-stars-file-918841fa1.jpeg.webp",
    positives: [
      "Magnifiques graphismes en pixel art",
      "Système de combat engageant"
    ],
    negatives: [
      "Peut sembler trop nostalgique pour certains",
      "Histoire classique"
    ]
  },
  {
    title: "Soul Hackers 2",
    description:
      "Un RPG cyberpunk de la série Shin Megami Tensei. Incarnez Ringo, une agent d'Aion, dans sa mission pour sauver l'humanité d'une apocalypse imminente.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/soul-hackers-2-file-91397e4ca.jpeg.webp",
    positives: [
      "Ambiance cyberpunk captivante",
      "Système de combat stratégique"
    ],
    negatives: ["Narration parfois lente", "Environnements répétitifs"]
  },
  {
    title: "Star Ocean: First Departure R",
    description: "Un remake du premier jeu Star Ocean, originalement sorti sur Super Famicom. Ce RPG d'action spatial suit l'histoire de Roddick et ses amis alors qu'ils voyagent à travers l'espace pour sauver leur planète.",
    image: "https://imgs.search.brave.com/U9VOwnwFAM_RC88hLlS7NnOwEY1AeI6x2xosmCd-UJg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8v/cV9hdXRvL2Rwcl8x/LjUvbmNvbS9zb2Z0/d2FyZS9zd2l0Y2gv/NzAwMTAwMDAwMjIx/NTAvZGE1NWVlZWUz/MWY4M2EyNWEyMzc0/YTc3MjE0YjE0M2Vl/NmZmOTYxNjg1OWM1/YzJhZTgxZDY0NTRh/OWM1YjE4NQ",
    positives: ["Graphismes et audio améliorés", "Système de combat en temps réel"],
    negatives: ["Peut sembler daté pour certains", "Histoire linéaire"]
  },
  {
    title: "Star Ocean: Integrity and Faithlessness",
    description:
      "Un RPG d'action se déroulant dans l'univers de Star Ocean. Suivez Fidel Camuze et son groupe dans leur quête pour protéger une mystérieuse jeune fille.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/21079.png.webp",
    positives: [
      "Système de combat dynamique",
      "Univers de science-fiction intéressant"
    ],
    negatives: ["Histoire courte", "Graphismes datés"]
  },
  {
    title: "Star Ocean: The Divine Force",
    description:
      "Le dernier opus de la série Star Ocean. Un RPG d'action mêlant science-fiction et fantasy, avec un système de combat amélioré et une exploration en 3D.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/star-ocean-the-divine-force-file-919921da1.jpeg.webp",
    positives: ["Liberté d'exploration", "Système de combat fluide"],
    negatives: ["Graphismes inégaux", "Scénario prévisible"]
  },
  {
    title: "Star Ocean: The Second Story R",
    description:
      "Un remake du classique de la PlayStation. Choisissez entre Claude ou Rena et vivez une aventure épique mêlant science-fiction et fantasy.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/star-ocean-the-second-story-r-tetiere-file-14d7e186.jpg.webp",
    positives: ["Graphismes 2.5D charmants", "Système de combat amélioré"],
    negatives: [
      "Peut sembler daté dans certains aspects",
      "Progression parfois lente"
    ]
  },
  {
    title: "Star Ocean: Till The End Of Time",
    description: "Le troisième opus de la série Star Ocean, maintenant disponible en version HD. Suivez Fayt Leingod dans une aventure épique à travers l'espace, mêlant science-fiction et fantasy dans un univers riche et complexe.",
    image: "https://imgs.search.brave.com/N9H-9fQkXfPmU2blRKIIL9Qfnl6TjJ9EU8VMrWd2Ijc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5qZXV4dmlkZW8u/Y29tL21lZGlhcy1t/ZC8xNDg3NzcvMTQ4/Nzc3MDE2NC0yNzE4/LWNhcmQuanBn",
    positives: ["Histoire complexe et profonde", "Système de combat dynamique"],
    negatives: ["Certains aspects du gameplay ont vieilli", "Peut être déroutant pour les nouveaux joueurs"]
  },
  {
    title: "Stranger of Paradise: Final Fantasy Origin",
    description:
      "Un spin-off action-RPG de Final Fantasy. Suivez Jack et ses compagnons dans leur quête pour vaincre Chaos, dans une réinterprétation sombre du premier Final Fantasy.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/6d8f-stranger_of_paradise:_final_fantasy_origin.jpeg.webp",
    positives: [
      "Système de combat intense",
      "Personnalisation poussée des jobs"
    ],
    negatives: ["Histoire confuse", "Graphismes inégaux"]
  },
  {
    title: "Sword and Fairy 7",
    description:
      "Le dernier opus de la série de RPG chinoise populaire. Plongez dans un monde inspiré de la mythologie chinoise avec des graphismes améliorés et un système de combat en temps réel.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/86439.jpg.webp",
    positives: [
      "Riche univers basé sur la mythologie chinoise",
      "Graphismes impressionnants"
    ],
    negatives: [
      "Peut être déroutant pour les nouveaux venus",
      "Traduction parfois approximative"
    ]
  },
  {
    title: "Tales of Arise",
    description:
      "Un RPG d'action qui suit l'histoire de Alphen et Shionne, issus de mondes opposés, dans leur quête pour changer leur destin et créer un nouvel avenir.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/740130/header.jpg",
    positives: [
      "Graphismes époustouflants",
      "Système de combat fluide et dynamique"
    ],
    negatives: [
      "Histoire parfois prévisible",
      "Certaines zones de jeu linéaires"
    ]
  },
  {
    title: "Tales of Berseria",
    description:
      "Suivez Velvet Crowe dans sa quête de vengeance contre l'homme qui lui a tout pris, dans ce RPG d'action sombre et mature de la série Tales of.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/429660/header.jpg",
    positives: ["Histoire captivante et mature", "Personnages bien développés"],
    negatives: [
      "Environnements parfois répétitifs",
      "Combats pouvant devenir monotones"
    ]
  },
  {
    title: "Tales of Symphonia Remastered",
    description:
      "Une version remasterisée du classique GameCube. Suivez Lloyd Irving et ses amis dans leur quête pour sauver deux mondes en conflit.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/372360/header.jpg",
    positives: [
      "Histoire épique et émouvante",
      "Système de combat en temps réel amélioré"
    ],
    negatives: [
      "Graphismes datés malgré le remaster",
      "Certains mécanismes de jeu vieillissants"
    ]
  },
  {
    title: "Tales of Vesperia: Definitive Edition",
    description:
      "L'édition définitive de Tales of Vesperia, avec du contenu supplémentaire. Suivez Yuri Lowell dans son voyage pour sauver son monde d'une ancienne menace.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/738540/header.jpg",
    positives: ["Personnages charismatiques", "Système de combat satisfaisant"],
    negatives: [
      "Rythme lent au début",
      "Graphismes améliorés mais toujours datés"
    ]
  },
  {
    title: "Tales of Zestiria",
    description:
      "Un RPG d'action où vous incarnez Sorey, un jeune homme devenu le Berger, dans sa quête pour libérer le monde de la corruption des Hellions.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/351970/header.jpg",
    positives: [
      "Monde ouvert à explorer",
      "Système de fusion des personnages intéressant"
    ],
    negatives: [
      "Histoire parfois confuse",
      "Caméra problématique dans certaines zones"
    ]
  },
  {
    title: "Temtem",
    description:
      "Un jeu multijoueur de capture et de combat de créatures inspiré de Pokémon. Il propose des combats en 2 contre 2, une personnalisation poussée, et un monde partagé à explorer avec 165 TemTem uniques à capturer et entraîner",
    image:
      "https://www.geeksandcom.com/wp-content/uploads/2022/10/Temtem_Launch_XboxWire-22749b86ebea998c1317.jpeg",
    positives: [
      "Une centaine de Temtem",
      "Combats stratégique",
      "Des 'shiny' intéressant"
    ],
    negatives: ["Uniquement en ligne", "level design: aller retour répété"]
  },
  {
    title: "The Witch And The Hundred Knight 2",
    description:
      "Un RPG d'action où vous incarnez le Hundred Knight, une créature invoquée par une sorcière pour combattre ses ennemis et découvrir les secrets d'un monde sombre et magique.",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/37117.jpeg.webp",
    positives: ["Univers sombre et captivant", "Combats dynamiques"],
    negatives: ["Histoire parfois confuse", "Graphismes datés"]
  },
  {
    title: "The Witcher 3: Wild Hunt",
    description:
      "Un RPG en monde ouvert acclamé par la critique. Incarnez Geralt de Riv, un chasseur de monstres, dans sa quête pour retrouver sa fille adoptive tout en naviguant dans un monde riche et détaillé.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    positives: ["Monde ouvert immersif", "Narration complexe et captivante"],
    negatives: [
      "Quêtes secondaires parfois répétitives",
      "Courbe d'apprentissage abrupte"
    ]
  },
  {
    title: "Trials of Mana",
    description:
      "Un remake du classique RPG d'action. Suivez les aventures de six héros dans leur quête pour sauver le monde de Mana, avec des graphismes modernisés et un système de combat amélioré.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/924980/header.jpg",
    positives: ["Graphismes modernisés", "Système de combat amélioré"],
    negatives: ["Histoire classique", "Peut sembler daté pour certains joueurs"]
  },
  {
    title: "Valkyrie Elysium",
    description:
      "Un action-RPG basé sur la mythologie nordique. Incarnez une Valkyrie chargée de sauver le monde de la destruction imminente du Ragnarök.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1963210/header.jpg",
    positives: ["Combats rapides et fluides", "Esthétique visuelle unique"],
    negatives: ["Histoire parfois prévisible", "Environnements répétitifs"]
  },
  {
    title: "Vampyr",
    description:
      "Un RPG d'action sombre se déroulant à Londres pendant l'épidémie de grippe espagnole. Incarnez un médecin récemment transformé en vampire, tiraillé entre son serment d'Hippocrate et sa soif de sang.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/427290/header.jpg",
    positives: ["Ambiance gothique captivante", "Choix moraux impactants"],
    negatives: ["Combats parfois répétitifs", "Performances techniques inégales"]
  },
  {
    title: "Vision Of Mana",
    description:
      "Pour la première fois depuis plus de 15 ans, une toute nouvelle entrée dans la série principale Mana arrive! Embarquez pour une nouvelle aventure avec Val, la nouvelle garde de l'âme, alors qu'il entreprend un voyage à travers le monde pour accompagner son amie dans son pèlerinage à l'arbre de Mana.",
    image:
      "https://imgs.search.brave.com/plzgPqhtyGopdc_z5sPclig5wZ8LuEBmS8vqjryjm9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZXJlYWN0b3Iu/ZnIvbWVkaWEvMDkv/XzQxNjA5MDNfNjUw/eC5wbmc",
    positives: ["", ""],
    negatives: ["", ""]
  },
  {
    title: "Watch Dogs 2",
    description:
      "Un jeu d'action-aventure en monde ouvert développé par Ubisoft. Incarnez Marcus Holloway, un hacker talentueux, dans la ville de San Francisco. Utilisez vos compétences pour pirater le système ctOS 2.0 et combattre les injustices sociales.",
    image: "https://example.com/watch-dogs-2-image.jpg",
    positives: [
      "Monde ouvert vivant",
      "Humour et scénario engageant",
      "Varitété des missions"
    ],
    negatives: ["IA parfois incohérente", "Quelques bugs techniques"]
  },
  {
    title: "Wild Hearts",
    description:
      "Un RPG d'action où vous chassez des bêtes géantes dans un monde inspiré du Japon féodal. Utilisez la technologie ancestrale et jouez en solo ou en coopération.",
    image:
      "https://cdn1.epicgames.com/offer/4cbfe407ada24702a556b6e4d28a8800/EGS_WILDHEARTSStandardEdition_KOEITECMOGAMESCOLTD_S1_2560x1440-1cc68f917e6cc489e5a94c630523a4c4",
    positives: ["Chasse de monstres épique", "Coopération intéressante"],
    negatives: ["Peut être répétitif", "Courbe d'apprentissage abrupte"]
  },
  {
    title: "World of Final Fantasy",
    description:
      "Un RPG au tour par tour mettant en scène des versions chibi des personnages emblématiques de Final Fantasy. Capturez et faites évoluer des monstres pour sauver le monde de Grymoire.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/552700/header.jpg",
    positives: [
      "Nostalgie pour les fans de Final Fantasy",
      "Système de capture de monstres amusant"
    ],
    negatives: ["Peut sembler enfantin pour certains", "Histoire simple"]
  },
  {
    title: "Xuan Yuan 7",
    description:
      "Un RPG d'action basé sur la mythologie chinoise. Explorez un monde riche en folklore et affrontez des créatures légendaires dans des combats dynamiques.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1249800/header.jpg",
    positives: ["Univers mythologique chinois captivant", "Combats fluides"],
    negatives: [
      "Peut être déroutant pour les non-initiés",
      "Traduction parfois approximative"
    ]
  },
  {
    title: "Ys Origin",
    description:
      "Un action-RPG préquelle de la série Ys. Explorez la Tour de Salomon et découvrez les origines de la série à travers trois personnages jouables.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/207350/header.jpg",
    positives: [
      "Gameplay d'action rapide et satisfaisant",
      "Multiples personnages jouables"
    ],
    negatives: ["Graphismes datés", "Histoire linéaire"]
  },
  {
    title: "Ys IX: Monstrum Nox",
    description:
      "Le dernier opus de la série Ys. Adol se retrouve emprisonné dans la ville de Balduq et obtient des pouvoirs surnaturels pour combattre une menace mystérieuse.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1351630/header.jpg",
    positives: [
      "Exploration verticale innovante",
      "Système de combat amélioré"
    ],
    negatives: [
      "Performance technique parfois instable",
      "Certains éléments de l'histoire prévisibles"
    ]
  }
];


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
