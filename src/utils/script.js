const gamesData = [
  {
    title: "Aeterna Noctis",
    description: "Un jeu de plateforme et d'action en 2D avec des graphismes peints à la main. Explorez un monde fantastique rempli de créatures étranges. Un metroidvania où lutte le mal et le bien",
    image: "https://media.vandal.net/m/5-2023/202352510325157_1.jpg",
    positives: ["Graphismes peints à la main", "Monde fantastique immersif", "Le Mal VS Le Bien"],
    negatives: ["Difficulté élevée", "Certaines mécaniques répétitives"]
  },
  {
    title: "Afterimage",
    description: "Un jeu de plateforme et d'action en 2D avec des graphismes peints à la main. Le joueur explore un monde fantastique rempli de créatures étranges et de paysages spectaculaires.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/header.jpg",
    positives: ["Graphismes époustouflants", "Exploration captivante", "Système de combat satisfaisant"],
    negatives: ["Narration faible", "Durée de vie courte"]
  },
  {
    title: "Anthem",
    description: "Un RPG d'action en ligne où vous incarnez un Freelancer équipé d'une exo-armure. Explorez un vaste monde ouvert, personnalisez votre Javelin et combattez aux côtés d'autres joueurs.",
    image: "https://i.ytimg.com/vi/ZFwylDNpgFc/maxresdefault.jpg",
    positives: ["Graphismes magnifiques", "Gameplay dynamique"],
    negatives: ["Problèmes de serveurs", "Contenu répétitif"]
  },
  {
    title: "Assassin's Creed Odyssey",
    description: "Forgez votre de Destin de Paria à légende vivante. Embarquez pour une odyssée ou vous leverez le voile sur les secret de vorte passé et changerez le destin de la Grèce Antique.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg",
    positives: ["Monde ouvert immense", "Combats dynamiques"],
    negatives: ["Histoire longue", "Quêtes répétitives"]
  },
  {
    title: "Assassin's Creed Origins",
    description: "L'égypte Antique. Une terre majestueuse au bord du chaos, manipulée par des forces obscures. Voyagez juqu'aux origines du credo des assassins et prenez part à ses évenements fondateurs.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/582160/header.jpg",
    positives: ["Égypte antique magnifique", "Gameplay renouvelé"],
    negatives: ["Quêtes annexes répétitives", "Histoire prévisible"]
  },
  {
    title: "Assassin's Creed Syndicate",
    description: "Londre 1868. Au coeur de la révolution industrielle. Incarnez les jumeaux assassins Jacob et Evie Frye et menez votre dans un combat contre les oppresseurs des classes populaires.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/368500/header.jpg",
    positives: ["Londres victorienne fidèle", "Double protagoniste intéressant"],
    negatives: ["Bugs techniques", "Missions similaires"]
  },
  {
    title: "Astria Ascending",
    description: "Un JRPG avec des graphismes dessinés à la main. Plongez dans une histoire épique avec huit héros uniques et un système de combat au tour par tour stratégique.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1121780/header.jpg",
    positives: ["Graphismes dessinés à la main", "Histoire épique"],
    negatives: ["Rythme lent", "Système de combat complexe"]
  },
  {
    title: "Astro Bot",
    description: "Embarquez pour une aventure Gigantesque avec notre petit robot fétiche dans ce sublime jeu de plateforme rempli de références.",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/2617/H5gKK4xmdpgFQyqpDZ3XCBS7.jpg",
    positives: ["Références a gogo", "Graphisme", "Nombreux monde"],
    negatives: ["Manque certaines Références"]
  },
  {
    title: "Atelier Firis",
    description: "Un RPG d'alchimie où vous suivez le voyage de Firis pour devenir une alchimiste certifiée. Explorez un vaste monde ouvert et créez des objets pour résoudre des énigmes.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/527290/header.jpg",
    positives: ["Grande liberté d'exploration", "Système d'alchimie riche"],
    negatives: ["Graphismes datés", "Quêtes répétitives"]
  },
  {
    title: "Atelier Lulua",
    description: "Le quatrième volet de la série Arland, où Lulua, fille de Rorona, aspire à devenir une grande alchimiste. Combinez alchimie et exploration dans ce RPG coloré.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1045620/header.jpg",
    positives: ["Personnages attachants", "Système d'alchimie agréable"],
    negatives: ["Narration parfois lente", "Complexité des recettes"]
  },
  {
    title: "Atelier Lydie & Suelle",
    description: "Suivez les aventures des jumelles Lydie et Suelle dans leur quête pour gérer le meilleur atelier d'alchimie. Explorez des mondes mystérieux cachés dans des peintures.",
    image: "https://imgs.search.brave.com/nE2OEw1bbkBrFXBhEh7KHnXOk_7SoAz61YL4yC4oEsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGxjb21wYXJlLmNv/bS9nYW1lX3RldGll/cmUvdXBsb2FkL2dh/bWVpbWFnZS9maWxl/LzQwMjIxLmpwZy53/ZWJw",
    positives: ["Univers coloré", "Gameplay diversifié"],
    negatives: ["Durée de vie courte", "Difficulté inégale"]
  },
  {
    title: "Atelier Ryza",
    description: "Un RPG d'alchimie avec un style artistique charmant. Suivez Ryza et ses amis dans leur quête pour sauver leur île natale grâce à la magie de l'alchimie.",
    image: "https://imgs.search.brave.com/n5sGpTuVqzje-R-6s2hbJ2C3qLqXU7yL3Ek_FCuH59c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vc29mdHdh/cmUvc3dpdGNoLzcw/MDEwMDAwMDIxNTQ4/LzgyNGExNGE1YzRl/ZDdjMTgzY2NiMjJi/ZWYxMzc1YjhhZDU2/NzMzYjVhMDk5ZmNi/MDNmZjIwMzViYzUy/OTU5NzA.jpeg",
    positives: ["Style artistique charmant", "Personnages attachants"],
    negatives: ["Répétitivité des quêtes", "Difficulté faible"]
  },
  {
    title: "Atelier Ryza 2",
    description: "La suite du populaire Atelier Ryza. Retrouvez Ryza trois ans plus tard dans une nouvelle aventure à la capitale royale, avec de nouveaux personnages et mécaniques d'alchimie.",
    image: "https://imgs.search.brave.com/1LiOTrfO5hWTBfGMC_6Zu5s9l2-bG3auuRQ9bFtRZiU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmludGVuZG8uY29t/L2V1L21lZGlhL2lt/YWdlcy8xMF9zaGFy/ZV9pbWFnZXMvZ2Ft/ZXNfMTUvbmludGVu/ZG9fc3dpdGNoXzQv/SDJ4MV9OU3dpdGNo/X0F0ZWxpZXJSeXph/Mkxvc3RMZWdlbmRz/QW5kVGhlU2VjcmV0/RmFpcnlfRlJfaW1h/Z2UxNjAwdy5qcGc",
    positives: ["Nouveaux personnages", "Système d'alchimie amélioré"],
    negatives: ["Similarités avec le premier opus", "Histoire prévisible"]
  },
  {
    title: "Atelier Sophie 2",
    description: "La suite du premier Sophie. Rejoignez Sophie dans un monde onirique où elle cherche son amie disparue tout en perfectionnant ses compétences en alchimie.",
    image: "https://imgs.search.brave.com/6m4hn1Di8fLJkRT4Ag-JWI6ytn4_9z7xm3UE0XC2jew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdGFudC1nYW1p/bmcuY29tL2ltYWdl/cy9wcm9kdWN0cy85/NzkyLzYxNngzNTMv/YXRlbGllci1zb3Bo/aWUtMi10aGUtYWxj/aGVtaXN0LW9mLXRo/ZS1teXN0ZXJpb3Vz/LWRyZWFtLXBjLWpl/dS1zdGVhbS1jb3Zl/ci5qcGc_dj0xNjU3/Njc3NjAw",
    positives: ["Histoire captivante", "Graphismes soignés"],
    negatives: ["Quêtes répétitives", "Durée de vie courte"]
  },
  {
    title: "Atlas Fallen",
    description: "Un jeu d'action-aventure où les joueurs luttent contre des créatures mythiques dans un monde désertique. Utilisez le sable comme une arme et explorez un vaste monde ouvert rempli de secrets.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAphHIWFkPTttkYY92bRcGUcGOHV_ES4uFQ&s",
    positives: ["Mécaniques de combat uniques", "Monde ouvert intrigant"],
    negatives: ["Narration faible", "Difficulté inégale"]
  },
  {
    title: "Badlo",
    description: "Plongez dans un monde magique rempli de mystères à résoudre, de temples à explorer, de villes à découvrir et de monstre à terrasser",
    image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fonigamers.com%2Fwp-content%2Fuploads%2F2022%2F05%2FBaldo-The-Guardian-Owls-Principal-1920x1080.jpg&sp=1741610717T61170408ba56019c0e9feeb3ccc918e8fcde03c65f0d34c3df12034af4c63efe",
    positives: ["Monde magique immersif", "Exploration riche"],
    negatives: ["Bugs techniques", "Difficulté mal équilibrée"]
  },
  {
    title: "Banishers",
    description: "Un jeu d'action RPG où vous incarnez des chasseurs de fantômes dans un monde surnaturel. Explorez des environnements hantés, combattez des esprits malveillants et découvrez les mystères cachés de ce monde.",
    image: "https://cdn1.epicgames.com/spt-assets/62b3525c0dae4deebb9b66f0d17bfd3f/banishers--ghosts-of-new-eden-urj7a.jpg",
    positives: ["Ambiance surnaturelle immersive", "Gameplay mêlant action et RPG"],
    negatives: ["Peut être répétitif", "Histoire parfois prévisible"]
  },
  {
    title: "Battle Chasers: Nightwar",
    description: "Un RPG au tour par tour inspiré des classiques japonais. Explorez des donjons générés aléatoirement, combattez avec un système stratégique et découvrez une histoire basée sur la série de comics Battle Chasers.",
    image: "https://www.nintendo.com/eu/media/images/10_share_images/games
