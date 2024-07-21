const gamesData = [
  {
    title: "(d'autres titres à venir)",
    description: "Plus de jeux seront ajoutés prochainement.",
    image: "#"
  },
  {
    title: "Afterimage",
    description:
      "Un jeu de plateforme et d'action en 2D avec des graphismes peints à la main. Le joueur explore un monde fantastique rempli de créatures étranges et de paysages spectaculaires.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLegx_C13jM0adc054oeGYEufNkmgrEjHXuw&s"
  },
  {
    title: "Anthem",
    description:
      "Un RPG d'action en ligne où vous incarnez un Freelancer équipé d'une exo-armure. Explorez un vaste monde ouvert, personnalisez votre Javelin et combattez aux côtés d'autres joueurs.",
    image: "https://i.ytimg.com/vi/ZFwylDNpgFc/maxresdefault.jpg"
  },
  {
    title: "Astria Ascending",
    description:
      "Un JRPG avec des graphismes dessinés à la main. Plongez dans une histoire épique avec huit héros uniques et un système de combat au tour par tour stratégique.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSauya5FE2yI8Rtsvoen7G8cma-P9vLqg74w&s"
  },
  {
    title: "Atelier Firis",
    description:
      "Un RPG d'alchimie où vous suivez le voyage de Firis pour devenir une alchimiste certifiée. Explorez un vaste monde ouvert et créez des objets pour résoudre des énigmes.",
    image:
      "https://imgs.search.brave.com/VIcoo584pj6PHOUjE88BDjpEOSgls01y2gHAohX8PHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcG9s/bG8yLmRsLnBsYXlz/dGF0aW9uLm5ldC9j/ZG4vVVA0MTA4L0NV/U0EwNzU5Ml8wMC9L/R2V1c1NXMDdYeHU1/UExPaEJtbkpPa1lL/S2dkOUk4by5wbmc"
  },
  {
    title: "Atelier Lulua",
    description:
      "Le quatrième volet de la série Arland, où Lulua, fille de Rorona, aspire à devenir une grande alchimiste. Combinez alchimie et exploration dans ce RPG coloré.",
    image:
      "https://imgs.search.brave.com/wnF5CZ-QDQVFCBGqeivH-a81Y6QICmEL4rCK2ucnpy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vZW5fVVMv/Z2FtZXMvc3dpdGNo/L2EvYXRlbGllci1s/dWx1YS10aGUtc2Np/b24tb2YtYXJsYW5k/LXN3aXRjaC9oZXJv"
  },
  {
    title: "Atelier Lydie & Suelle",
    description:
      "Suivez les aventures des jumelles Lydie et Suelle dans leur quête pour gérer le meilleur atelier d'alchimie. Explorez des mondes mystérieux cachés dans des peintures.",
    image:
      "https://imgs.search.brave.com/nE2OEw1bbkBrFXBhEh7KHnXOk_7SoAz61YL4yC4oEsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGxjb21wYXJlLmNv/bS9nYW1lX3RldGll/cmUvdXBsb2FkL2dh/bWVpbWFnZS9maWxl/LzQwMjIxLmpwZy53/ZWJw"
  },
  {
    title: "Atelier Ryza",
    description:
      "Un RPG d'alchimie avec un style artistique charmant. Suivez Ryza et ses amis dans leur quête pour sauver leur île natale grâce à la magie de l'alchimie.",
    image:
      "https://imgs.search.brave.com/n5sGpTuVqzje-R-6s2hbJ2C3qLqXU7yL3Ek_FCuH59c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vc29mdHdh/cmUvc3dpdGNoLzcw/MDEwMDAwMDIxNTQ4/LzgyNGExNGE1YzRl/ZDdjMTgzY2NiMjJi/ZWYxMzc1YjhhZDU2/NzMzYjVhMDk5ZmNi/MDNmZjIwMzViYzUy/OTU5NzA.jpeg"
  },
  {
    title: "Atelier Ryza 2",
    description:
      "La suite du populaire Atelier Ryza. Retrouvez Ryza trois ans plus tard dans une nouvelle aventure à la capitale royale, avec de nouveaux personnages et mécaniques d'alchimie.",
    image:
      "https://imgs.search.brave.com/1LiOTrfO5hWTBfGMC_6Zu5s9l2-bG3auuRQ9bFtRZiU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmludGVuZG8uY29t/L2V1L21lZGlhL2lt/YWdlcy8xMF9zaGFy/ZV9pbWFnZXMvZ2Ft/ZXNfMTUvbmludGVu/ZG9fc3dpdGNoXzQv/SDJ4MV9OU3dpdGNo/X0F0ZWxpZXJSeXoy/TG9zdExlZ2VuZHNB/bmRUaGVTZWNyZXRG/YWlyeV9GUl9pbWFn/ZTE2MDB3LmpwZw"
  },
  {
    title: "Atelier Sophie 2",
    description:
      "La suite du premier Sophie. Rejoignez Sophie dans un monde onirique où elle cherche son amie disparue tout en perfectionnant ses compétences en alchimie.",
    image:
      "https://imgs.search.brave.com/6m4hn1Di8fLJkRT4Ag-JWI6ytn4_9z7xm3UE0XC2jew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdGFudC1nYW1p/bmcuY29tL2ltYWdl/cy9wcm9kdWN0cy85/NzkyLzYxNngzNTMv/YXRlbGllci1zb3Bo/aWUtMi10aGUtYWxj/aGVtaXN0LW9mLXRo/ZS1teXN0ZXJpb3Vz/LWRyZWFtLXBjLWpl/dS1zdGVhbS1jb3Zl/ci5qcGc_dj0xNjU3/Njc3NjAw"
  },
  {
    title: "Atlas Fallen",
    description:
      "Un jeu d'action-aventure où les joueurs luttent contre des créatures mythiques dans un monde désertique. Utilisez le sable comme une arme et explorez un vaste monde ouvert rempli de secrets.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAphHIWFkPTttkYY92bRcGUcGOHV_ES4uFQ&s"
  },
  {
    title: "Banishers",
    description:
      "Un jeu d'action RPG où vous incarnez des chasseurs de fantômes dans un monde surnaturel. Explorez des environnements hantés, combattez des esprits malveillants et découvrez les mystères cachés de ce monde.",
    image:
      "https://cdn1.epicgames.com/spt-assets/62b3525c0dae4deebb9b66f0d17bfd3f/banishers--ghosts-of-new-eden-urj7a.jpg"
  },
  {
    title: "Biomutant",
    description:
      "Un RPG d'action en monde ouvert avec un protagoniste mutant. Personnalisez votre personnage, explorez un monde post-apocalyptique, et engagez-vous dans des combats dynamiques avec une variété d'armes et de pouvoirs.",
    image:
      "https://cdn2.unrealengine.com/egs-biomutant-experiment101-g1a-00-1920x1080-7283d571f350.jpg"
  },
  {
    title: "Blue Reflection: Second Light",
    description:
      "Un RPG qui suit les aventures d'un groupe de filles dotées de pouvoirs magiques. Explorez des mondes parallèles, combattez des monstres et renforcez les liens entre les personnages pour débloquer de nouvelles compétences.",
    image:
      "https://imgs.search.brave.com/CpwRIHaFWe4giwgl9539VjPnKhiSXliDYh7dHjo82yo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdGFudC1nYW1p/bmcuY29tL2ltYWdl/cy9wcm9kdWN0cy8x/MDEyMi82MTZ4MzUz/L2JsdWUtcmVmbGVj/dGlvbi1zZWNvbmQt/bGlnaHQtcGMtamV1/LXN0ZWFtLWNvdmVy/LmpwZz92PTE2NTkx/NDY0MDA"
  },
  {
    title: "Call of Duty Black Ops 3",
    description:
      "Un jeu de tir à la première personne avec une campagne immersive et des modes multijoueurs compétitifs. Plongez dans un futur dystopique avec des soldats augmentés et des armes high-tech.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg?t=1646763462"
  },
  {
    title: "Captain Tsubasa Rise of New Champions",
    description:
      "Un jeu de football arcade basé sur le célèbre manga Captain Tsubasa. Vivez des matchs spectaculaires avec des tirs surpuissants et des techniques spéciales inspirées de la série.",
    image:
      "https://image.jeuxvideo.com/medias-crop-1200-675/159957/1599567951-1501-card.jpg"
  },
  {
    title: "C.A.R.D RPG",
    description:
      "Un jeu de rôle unique basé sur un système de cartes. Construisez votre deck, explorez des donjons générés aléatoirement et affrontez des ennemis dans des combats stratégiques.",
    image:
      "https://imgs.search.brave.com/Iwj0RN7d_sy_-hjdCICtayb_FWMQShfnHoV9PW23kXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVsbHByb2dyYW1s/YXJpbmRpci5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDUvQy5BLlIuRC5T/Li1SUEcuanBn"
  },
  {
    title: "Cat Quest + Cat Quest II",
    description:
      "Une collection de deux RPG d'action adorables mettant en scène des chats héroïques. Explorez un monde ouvert rempli d'aventures, de quêtes et de combats amusants.",
    image:
      "https://imgs.search.brave.com/b2r3eDwAA4vKDjJc2V71iaJ46baD7aAshoBtGOfLpeE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vc29mdHdh/cmUvc3dpdGNoLzcw/MDEwMDAwMDI4MzU5/Lzg5M2ZlZjg2Yjg2/MTFiODE2NWZkN2Yz/OTMwZmVlZTIzYzEy/MzZhNmVlNWQwMTRh/ODliM2Y1ZWRmYTg0/NzRjMTE"
  },
  {
    title: "Cladun Returns: This Is Sengoku",
    description:
      "Un RPG d'action rétro se déroulant dans le Japon féodal. Créez votre personnage, explorez des donjons générés aléatoirement et combattez dans un style pixel art unique.",
    image:
      "https://imgs.search.brave.com/9t10XY5b_-NeU7N1hVFnM3lmO_AopjNEz_06QqMd8_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMS5k/bWNkbi5uZXQvdi9K/cUpPbDFWdEdHSXB5/WkpZaC94MTgw"
  },
  {
    title: "CodeVein",
    description:
      "Un RPG d'action sombre dans un monde post-apocalyptique. Combattez en tant que Revenant, un vampire doté de pouvoirs surnaturels, dans un style de jeu inspiré de Dark Souls.",
    image:
      "https://imgs.search.brave.com/wPh4JgQue9wZNue7FAZSQHnv_h9DcwE9Ia5GIh_oWcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/amV1eHZpZGVvLWxp/dmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9qdmwvMjAyMi8w/Ny9jb2RlLXZlaW4t/NzUweDM1Ny5qcGc"
  },
  {
    title: "Crisis Core Final Fantasy VII",
    description:
      "Un remake du jeu PSP, préquelle de Final Fantasy VII. Suivez l'histoire de Zack Fair dans cette aventure RPG d'action avec des graphismes améliorés et un gameplay modernisé.",
    image:
      "https://imgs.search.brave.com/B4LGC-YR7Laz-w1O7aHY_CLnIpCArHkAJgibEvPUtZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1p/bmctY2RuLmNvbS9p/bWFnZXMvcHJvZHVj/dHMvMTIyNjMvNjE2/eDM1My9jcmlzaXMt/Y29yZS1maW5hbC1m/YW50YXN5LXZpaS1y/ZXVuaW9uLXBjLWpl/dS1zdGVhbS1ldXJv/cGUtY292ZXIuanBn/P3Y9MTY5Njg2Njkw/OQ"
  },
  {
    title: "CrisTales",
    description:
      "Un RPG au tour par tour unique avec une mécanique de voyage dans le temps. Explorez un monde magnifique inspiré des contes de fées colombiens et prenez des décisions qui affectent le passé, le présent et le futur.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000021366/810f34f3cf19d23f51c1db05b52894e527226181f15e5414f3b106098a640c6f"
  },
  {
    title: "Cyberpunk 2077",
    description:
      "Un RPG en monde ouvert se déroulant dans un futur dystopique. Incarnez V, un mercenaire cybernétiquement amélioré, et explorez Night City, une métropole obsédée par le pouvoir, le glamour et les modifications corporelles.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg"
  },
  {
    title: "Dark Alliance",
    description:
      "Un jeu d'action RPG basé sur l'univers de Donjons & Dragons. Combattez aux côtés de vos amis dans ce jeu coopératif, explorez des donjons dangereux et affrontez des créatures mythiques.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/623280/capsule_616x353.jpg?t=1693497645"
  },
  {
    title: "Destiny Connect",
    description:
      "Un RPG où vous voyagez dans le temps pour sauver la ville de Clocknee d'une catastrophe imminente. Résolvez des énigmes et combattez des ennemis mécaniques avec l'aide de vos compagnons.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/fr_CA/games/switch/d/destiny-connect-tick-tock-travelers-switch/hero"
  },
  {
    title: "Devil May Cry 5 Special Edition",
    description:
      "Une version améliorée du jeu d'action stylisé avec de nouveaux personnages jouables, des graphismes améliorés et des modes de jeu supplémentaires. Incarnez Dante, Nero et Vergil dans des combats intenses contre des démons.",
    image: "https://www.devilmaycry.com/5se/assets/images/share.png"
  },
  {
    title: "DioField Chronicle",
    description:
      "Un RPG stratégique qui combine des éléments de fantasy et de guerre. Dirigez vos troupes sur le champ de bataille et prenez des décisions tactiques pour vaincre vos ennemis.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000045379/89b77052967271f0fc10309eeee8cd930eb3b46cefe3743b15cf3eb186436672"
  },
  {
    title: "Dragon's Dogma II",
    description:
      "La suite très attendue du RPG d'action Dragon's Dogma. Explorez un monde ouvert rempli de créatures fantastiques et engagez-vous dans des combats dynamiques avec des compagnons IA.",
    image:
      "https://blog.fr.playstation.com/tachyon/sites/10/2023/11/2a8448dcd6f6cc96d5882a58a09c3dd1710fc334.jpeg"
  },
  {
    title: "Dragon Quest Builder",
    description:
      "Un jeu de construction et d'aventure dans l'univers de Dragon Quest. Utilisez vos compétences en construction pour reconstruire des villes et combattre des monstres.",
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonQuestBuilders_image1600w.jpg"
  },
  {
    title: "Dragon Quest Builder 2",
    description:
      "La suite améliorée de Dragon Quest Builders. Construisez des structures encore plus grandes et explorez de nouvelles îles tout en combattant des ennemis et en accomplissant des quêtes.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1072420/capsule_616x353.jpg?t=1712127433"
  },
  {
    title: "Dragon Quest Heroes : Le Crépuscule de l'Arbre du Monde",
    description:
      "La suite du spin-off d'action de Dragon Quest. Incarnez des héros emblématiques de la série et combattez des hordes de monstres dans des batailles épiques.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/410850/capsule_616x353_french.jpg?t=1596103807"
  },
  {
    title: "Dragon Quest XI Definitive Edition",
    description:
      "Un JRPG classique avec des graphismes modernes et du contenu supplémentaire. Suivez l'épopée du Luminaire dans sa quête pour sauver le monde d'Erdrea.",
    image:
      "https://gaming-cdn.com/images/products/7643/orig/dragon-quest-xi-s-les-combattants-de-la-destinee-edition-ultime-definitive-edition-pc-jeu-steam-europe-cover.jpg?v=1684473422"
  },
  {
    title: "Dungeon Munchies",
    description:
      "Un jeu de plateforme et de cuisine où vous chassez et cuisinez des monstres pour gagner des pouvoirs. Explorez des donjons, préparez des plats et découvrez des recettes uniques.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202208/2506/c4Boa163pL4hYwlhmoqhwoWS.jpg"
  },
  {
    title: "Edge Of Eternity",
    description:
      "Un RPG au tour par tour se déroulant dans un monde de fantasy en proie à une guerre et à une mystérieuse corruption. Suivez Daryon et Selene dans leur quête pour sauver leur monde.",
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EdgeOfEternity_MidgarStudio_S3_2560x1440-81a646b96c49e82f758a2dc625fe5802"
  },
  {
    title: "Eiyuden Chronicle: Hundred Heroes",
    description:
      "Un RPG tactique qui rend hommage aux classiques du genre. Recrutez plus de 100 personnages uniques et engagez-vous dans des batailles stratégiques pour sauver votre royaume.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1658280/capsule_616x353.jpg?t=1720811443"
  },
  {
    title: "Eiyuden Chronicle: Rising",
    description:
      "Un action-RPG qui sert de préquelle à Eiyuden Chronicle: Hundred Heroes. Explorez des ruines anciennes, combattez des monstres et découvrez les histoires des personnages principaux.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000044258/a35a23f6576a9ddec3ecab8d604cb3e336ae6c093da3744c83bc2147fbf3091e"
  },
  {
    title: "Elden Ring",
    description:
      "Un RPG d'action en monde ouvert par les créateurs de Dark Souls. Explorez un vaste monde interconnecté, combattez des ennemis redoutables et découvrez les secrets de l'Elden Ring.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png"
  },
  {
    title: "Exist Archive",
    description:
      "Un RPG au tour par tour où vous explorez des donjons et combattez des ennemis dans un monde parallèle. Découvrez les mystères de ce monde et les secrets de votre propre existence.",
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2016/10/Exist-Archive-Logo.jpg"
  },
  {
    title: "FairyTale",
    description:
      "Un RPG d'action enchanteur où vous incarnez une jeune fée dans un monde magique. Explorez des royaumes féeriques, résolvez des énigmes et affrontez des créatures mythiques pour sauver votre royaume.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70070000010761/f24813812527737efecdeba972400f74486be544314852c93eaa2e80d893ea4a"
  },
  {
    title: "Final Fantasy Type-0 HD",
    description:
      "Un spin-off de Final Fantasy avec un gameplay d'action. Dirigez une équipe de 14 cadets magiques dans des missions de combat intenses pour libérer leur nation de l'oppression impériale.",
    image:
      "https://gaming-cdn.com/images/products/855/orig/final-fantasy-type-0-hd-pc-jeu-steam-cover.jpg?v=1705402458"
  },
  {
    title: "Final Fantasy VII: Remake",
    description:
      "Une réinvention moderne du classique RPG de Square Enix. Revivez l'histoire de Cloud et ses amis à Midgar avec des graphismes époustouflants et un système de combat repensé mêlant action et stratégie.",
    image:
      "https://www.journaldujapon.com/wp-content/uploads/2020/05/SEA_END_fb_share_img_1200x630.jpg"
  },
  {
    title: "Final Fantasy VII: Rebirth",
    description:
      "La suite très attendue de Final Fantasy VII Remake. Continuez l'aventure de Cloud et ses compagnons au-delà de Midgar, explorant un vaste monde ouvert rempli de nouveaux défis et de révélations.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202308/3005/537b5208a8ee42935286a44b3b981da86d976bf54899bf98.jpg"
  },
  {
    title: "Final Fantasy VIII Remastered",
    description:
      "Un RPG épique avec un système de junction unique, maintenant en HD. Suivez Squall et les SeeDs dans leur lutte contre une sorcière menaçant de comprimer le temps.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000019037/1f609577d7c4f00a85b762bb56fcec55f3ebba9b0ca77292ec11626f3d804dc2"
  },
  {
    title: "Final Fantasy X/X2 HD",
    description:
      "Deux jeux Final Fantasy emblématiques remasterisés en HD. Vivez l'histoire émouvante de Tidus et Yuna dans FFX, puis poursuivez l'aventure dans le monde coloré de FFX-2.",
    image:
      "https://gaming-cdn.com/images/products/1440/orig/final-fantasy-x-x-2-hd-remaster-hd-remaster-pc-jeu-steam-cover.jpg?v=1704208232"
  },
  {
    title: "Final Fantasy XII Zodiac Age",
    description:
      "Version améliorée du douzième opus de la série. Explorez le monde d'Ivalice dans cette aventure politique et fantastique, avec un système de combat innovant et des graphismes remasterisés.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000009746/5bcb8b7802294acb31bc57de2d50a34c1e7a3bd10d8d00f931aa297e20948196"
  },
  {
    title: "Final Fantasy XV",
    description:
      "Un RPG d'action dans un monde ouvert moderne. Accompagnez le prince Noctis et ses amis dans un road trip épique mêlant technologie avancée et magie ancestrale.",
    image:
      "https://gaming-cdn.com/images/products/11258/orig/final-fantasy-xv-royal-edition-xbox-one-xbox-series-x-s-royal-edition-xbox-one-xbox-series-x-s-jeu-microsoft-store-etats-unis-cover.jpg?v=1705325920"
  },
  {
    title: "Final Fantasy XVI",
    description:
      "Le dernier opus de la célèbre série de RPG. Plongez dans un monde médiéval-fantastique où la politique et les invocations s'entrechoquent dans une histoire mature et épique.",
    image:
      "https://fyre.cdn.sewest.net/ff-xvi/63613f54b609f28540733c42/social_share-GK0OFw6bj.jpg"
  },
  {
    title: "Forspoken",
    description:
      "Un RPG d'action-aventure où vous incarnez Frey, une New-Yorkaise transportée dans un monde fantastique. Maîtrisez la magie et le parkour pour explorer un vaste monde ouvert et affronter des créatures corrompues.",
    image:
      "https://cdn1.epicgames.com/offer/a472b0f2f2a5493d960a941f01cf3393/EGS_Forspoken_LuminousProductions_S1_2560x1440-f2f99882e9d396b21fb65735d266385a_2560x1440-f2f99882e9d396b21fb65735d266385a"
  },
  {
    title: "Godfall",
    description:
      "Un RPG d'action où vous affrontez des ennemis dans un monde de haute fantaisie. Utilisez des armures légendaires appelées Valorplates pour vaincre des hordes d'ennemis et des boss puissants.",
    image:
      "https://cdn.gamekult.com/images/gallery/34/348571/godfall-pc-ps5-1e367c7b.jpg"
  },
  {
    title: "Grandblue Fantasy: ReLink",
    description:
      "Un action-RPG basé sur le populaire jeu mobile Granblue Fantasy. Explorez un monde vaste et magnifique, engagez-vous dans des combats dynamiques et découvrez une histoire épique avec des personnages mémorables.",
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2023/01/Granblue-Fantasy-Relink-HD-scaled.jpg"
  },
  {
    title: "Hack//G.U. Last Recode",
    description:
      "Une collection remasterisée de la trilogie .hack//G.U. avec un nouvel épisode. Plongez dans un MMORPG simulé, incarnez Haseo dans sa quête pour sauver son ami et découvrez les mystères derrière le jeu 'The World'.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000039876/98e4d1676ceb6fd61a210429a26c7a6ae3627c765e2875adbcc270965b940432"
  },
  {
    title: "Hogwarts Legacy",
    description:
      "Un RPG d'action en monde ouvert dans l'univers de Harry Potter. Explorez Poudlard, apprenez des sorts, préparez des potions, et découvrez des secrets tout en façonnant votre propre héritage magique.",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000014724/72ce0a17215521a167c3da579db4cc48a2f7a52eacc81ad985ba20fd6817fdc2"
  },
  {
    title: "Kingdom Hearts The Story So Far",
    description:
      "Une collection regroupant les jeux principaux de la série Kingdom Hearts. Revivez l'aventure de Sora, Donald et Dingo à travers différents mondes Disney et Square Enix.",
    image:
      "https://www.animenewsnetwork.com/thumbnails/crop600x315gPP/cms/news.2/137799/kh-story-so-far.jpg"
  },
  {
    title: "Kingdom Hearts HD 2.8",
    description:
      "Une compilation incluant Kingdom Hearts Dream Drop Distance HD, Kingdom Hearts 0.2 Birth by Sleep, et le film Kingdom Hearts χ Back Cover. Préparez-vous pour Kingdom Hearts III.",
    image:
      "https://cdn1.epicgames.com/c8ff067c1c984cd7ab1998e8a9afc8b6/offer/EGS_KINGDOMHEARTSHD28FinalChapterPrologue_SquareEnix_S5-1920x1080-bdc8f514d3488ea8484639733b01b09e.jpg"
  },
  {
    title: "Kingdom Hearts III",
    description:
      "Le troisième opus principal de la série. Sora et ses amis affrontent l'Organisation XIII dans une aventure épique à travers de nouveaux mondes Disney et Pixar.",
    image:
      "https://cdn1.epicgames.com/0712176b5e3e49bfa8866c0ee1359f2d/offer/EGS_KINGDOMHEARTSIIIReMindDLC_SquareEnix_S1-2560x1440-5044e506e523e5ff52628d1060699062.jpg"
  },
  {
    title: "Like A Dragon Ishin",
    description: "Un jeu d'action-aventure se déroulant dans le Japon féodal.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1805480/capsule_616x353.jpg?t=1717079037"
  },
  {
    title: "One Piece Odyssey",
    description: "Un RPG basé sur le célèbre manga One Piece.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814000/capsule_616x353.jpg?t=1703657096"
  },
  {
    title: "Scarlet Nexus",
    description:
      "Un RPG d'action dans un futur dystopique avec des pouvoirs psychiques.",
    image:
      "https://gaming-cdn.com/images/products/6906/orig/scarlet-nexus-pc-spiel-steam-cover.jpg?v=1651581759"
  },
  {
    title: "Star Ocean Divine Force",
    description: "Un RPG de science-fiction avec des combats en temps réel.",
    image:
      "https://fyre.cdn.sewest.net/star-ocean-tdf/6278f2af7867700012c8e9b2/sharing_compact-Gdv8nMCD2.jpg"
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
