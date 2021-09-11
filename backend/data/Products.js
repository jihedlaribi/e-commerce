const products = [
  {
    name: "Apple Watch Series 5",
    imageUrl:
      "https://m.media-amazon.com/images/I/81poUIY9wHL._AC_SL1500_.jpg",
    description:
      "- La batterie de ce produit offrira plus de 80% de l'autonomie des batteries neuves.- Les accessoires peuvent ne pas être d'origine, mais seront compatibles et entièrement fonctionnels. Le produit peut être livré dans une boîte générique.",
    price: 599 ,
    countInStock: 4,
  },
  {
    name: " Apple Watch Series 6",
    imageUrl:
      "https://m.media-amazon.com/images/I/81nJ0682YeL._AC_SL1500_.jpg",
    description:
     "Le modèle GPS + Cellular vous permet de passer des appels, d’échanger des messages et d’obtenir des itinéraires sans votre téléphone (opérateurs pris en charge: Orange, SFR. L’Apple Watch et l’iPhone doivent être rattachés au même opérateur.)",
    price: 750,
    countInStock: 3,
  },
  {
    name: "Playstation 5 (Rouge)",
    imageUrl:
      "https://m.media-amazon.com/images/I/61Bdagl0fyS._AC_SL1500_.jpg",
    description:
      "[Nouvelle plaque frontale pour console PS5] – La coque de rechange conçue sur mesure pour console PS5 s'adapte parfaitement à la console PS5. Il fonctionne exactement comme la coque originale et remplace parfaitement la coque d'origine de la console PS5. (Remarque : ne prend pas en charge la version de disque de console PS5)Coque anti-rayures pour console PS5 : la coque rigide et résistante aux chocs pour console PS5 est robuste et durable, pas facile à déformer, et peut résister efficacement à l'impact d'une utilisation quotidienne. En utilisant un matériau ABS de haute qualité, il peut efficacement imperméable à l'eau, à la poussière et aux rayures, et offre la protection ultime pour votre console PS5.",
    price: 590,
    countInStock: 0,
  },
    {
      name: "PlayStation 5",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 499,
      countInStock: 15,
    },
    {
      name: "Iphone 12",
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 10,
    },
    {
      name: " iPhone 12 (128 Go) - Mauve ",
      imageUrl:
        "https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_SL1500_.jpg",
      description:
       "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 4,
    },

    {
      name: "Cannon EOS-1D",
      imageUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 1300,
      countInStock: 5,
    },
    {
      name: "Amazon Alexa",
      imageUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 50,
      countInStock: 25,
    },
    {
      name: "Audio Technica Headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      price: 233,
      countInStock: 4,
    },
    {
      name: "JBL FLIP 4",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      price: 140,
      countInStock: 10,
    },
    {
      name: "JBL Flip Essential ",
      imageUrl:
        "https://m.media-amazon.com/images/I/71Sihz9PA9S._AC_SL1500_.jpg",
      description:
        "L'enceinte portable JBL Flip Essential est un accessoire universel pour mettre de l'ambiance. Avec un son incroyablement puissant, démarrez une soirée n'importe quand et par tous les tempsDonnez plus d'ampleur à la fête : l'enceinte JBL offre une diffusion Bluetooth à partir de votre smartphone ou tablette. Connectez + de 100 enceintes JBL entre elles avec la Technologie Connect+Robuste et waterproof – Pour survivre à toutes vos aventures, la Flip Essentiel est composée de matériaux résistants et étanches, ce qui la rend adaptée pour le sport, la plage & piscine !Livraison : 1x Flip Essentiel JBL enceinte portable sans fil / 1x câble micro USB JBL / 1x fiche technique sécurité / 1x guide de démarrage rapide / Dimensions: 6.4 x 16.9 x 6.4cm – Noir",
      price: 145,
      countInStock: 6,
    },

   
    {
      name: "Samsung Galaxy Z Flip3 5G",
      imageUrl:
        "https://m.media-amazon.com/images/I/71TVdjWiwnL._AC_SL1500_.jpg",
      description:
       " Du 27 août au 31 octobre 2021, Jusqu’à 150€ remboursés sur un ou plusieurs accessoires éligibles achetés avec un Galaxy Z Flip3 ou Z Fold3 5G (modalités dans Guide Produits et documents)Taille compacte - Un smartphone de taille normale qui se plie pour s'adapter aux petites poches. Replié, le Galaxy Z Flip3 5G ne mesure que 107 mm",
      price: 988,
      countInStock: 6,
    },
    {
      name: "Samsung Galaxy Z Flip 5G BROWN ",
      imageUrl:
        "https://m.media-amazon.com/images/I/71CIw6Q50FL._AC_SL1500_.jpg",
      description:
        "Samsung Galaxy Z Flip Thom Browne has 8GB RAM + 256GB memory and also a 6.7 inch display with 1080 x 2636 pixel resolution and a 12+12 MP dual main camera with flash and a 10 MP secondary camera. It also has Bluetooth, Wi-Fi, hands free, MP3 Player, NFC and side fingerprint reader.",
      price: 2250,
      countInStock: 3,
    },

    {
      name: "SAMSUNG Z FLIP 5G 256 Go Gris  ",
      imageUrl:
        "https://m.media-amazon.com/images/I/71ZHlRpJdAL._AC_SL1500_.jpg",
      description:
        "Samsung Galaxy Z Flip Thom Gris has 8GB RAM + 256GB memory and also a 6.7 inch display with 1080 x 2636 pixel resolution and a 12+12 MP dual main camera with flash and a 10 MP secondary camera. It also has Bluetooth, Wi-Fi, hands free, MP3 Player, NFC and side fingerprint reader.",
      price: 1550,
      countInStock: 1,
    },

    
 
   
  ];
  
  module.exports = products;