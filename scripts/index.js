"use strict";

const impImages = [
  "images/impressionism/Claude_Monet,_Impression,_soleil_levant.jpg",
  "images/impressionism/Hay_Harvest_at_Éragny,_1901,_Camille_Pissarro.jpg",
  "images/impressionism/Pierre-Auguste_Renoir,_Le_Moulin_de_la_Galette.jpg",
  "images/impressionism/Camille_Pissarro_-_Boulevard_Montmartre_-_Eremitage.jpg",
  "images/impressionism/The_Fighting_Temeraire,_JMW_Turner,_National_Gallery.jpeg",
  "images/impressionism/Claude_Monet_-_Jardin_à_Sainte-Adresse.jpeg",
  "images/impressionism/Berthe_Morisot_Reading.jpg"
]

const expImages = [
  "images/expressionism/Egon_Schiele_-_Eduard_Kosmack_-_4702_-_Österreichische_Galerie_Belvedere.jpeg",
  "images/expressionism/Den_blinde_spelmannen_x_Alvar_Cawén.jpeg",
  "images/expressionism/Edvard_Munch,_1893,_The_Scream,_oil,_tempera_and_pastel_on_cardboard,_91_x_73_cm,_National_Gallery_of_Norway.jpeg",
  "images/expressionism/El_Greco_View_of_Toledo.jpeg",
  "images/expressionism/Wassily_Kandinsky,_1903,_The_Blue_Rider_(Der_Blaue_Reiter),_oil_on_canvas,_52.1_x_54.6_cm,_Stiftung_Sammlung_E.G._Bührle,_Zurich.jpg",
  "images/expressionism/August_Macke_005.jpeg",
  "images/expressionism/Large_Blue_Horses.jpeg"
]

const neoImages = [
  "images/neo-impressionism/Signac_-_Portrait_de_Félix_Fénéon.jpeg",
  "images/neo-impressionism/Apple_Harvest_by_Camille_Pissarro.jpeg",
  "images/neo-impressionism/Baigneurs_a_Asnieres.jpeg",
  "images/neo-impressionism/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpeg",
  "images/neo-impressionism/Henri-Edmond_Cross_-_The_Evening_Air_-_Google_Art_Project.jpeg",
  "images/neo-impressionism/Morning,_Interior_-_Luce.jpeg",
  "images/neo-impressionism/Paul_Signac,_1893,_Femme_à_l'ombrelle,_oil_on_canvas,_81_x_65_cm,_Musée_d'Orsay.jpeg"
]

const messages = [
  "As you embark on this journey, prepare to be enthralled by colors, emotions, and techniques.",
  "Art is diverse, evolving, and deeply personal.",
  "Each painting style tells its own story, influenced by its era, the artist's emotions, and the world around them.",
  "We will be exploring Impressionism, Expressionism, and Neo-Impressionism.",
  "Impressionism:<br> Originating in the 19th century, this style captures the 'impression' of a moment.",
  "Think fleeting light, soft color palettes, and open compositions.",
  "Famous for its outdoor scenes, Impressionism aims to convey the senses, not just the sights.",
  "Expressionism:<br> A dive into raw emotion.",
  "This style emerged in the early 20th century, emphasizing the artist's inner feelings over reality.",
  "Bold colors, distorted forms, and a desire to evoke moods or ideas are its hallmark.",
  "Neo-Impressionism:<br> An offshoot of Impressionism, but with a scientific twist!",
  "Think dots of pure color that visually blend from a distance, creating a shimmering play of light.",
  "It's a meticulous style, capturing luminosity in a unique way.",
  "Now that you've been introduced to these mesmerizing styles, let your senses wander.",
  "Explore further, embrace the emotions, and let art become an indelible part of your soul.",
  "Happy exploring!<br> Click on any tile to begin.",
  "Welcome to the World of Art!"
]

document.addEventListener('DOMContentLoaded', function() {
  let impImage = 0;
  let expImage = 0;
  let neoImage = 0;

  const tiles = document.querySelectorAll('.tile-container');
  const info = document.querySelector('h2');

  function loadImages() {
    tiles.forEach(function(tile) {
      const nextImage = document.createElement('img');
      switch (tile.id) {
        case "impressionism":
          {
            impImage++;
            nextImage.src = impImages[impImage % impImages.length];
          }
          break;
        case "expressionism":
          {
            expImage++;
            nextImage.src = expImages[expImage % expImages.length];
          }
          break;
        case "neo-impressionism":
          {
            neoImage++;
            nextImage.src = neoImages[neoImage % neoImages.length];
          }
          break;
      }
      nextImage.className = 'fadein';
      tile.appendChild(nextImage);
      if (tile.children.length > 2) { tile.children[0].remove(); }
    });
  }

  function showInfo() {
    info.innerHTML = messages[0];
    messages.push(messages.shift());
  }

  setInterval(loadImages, 2500);
  setInterval(showInfo, 5000);
});