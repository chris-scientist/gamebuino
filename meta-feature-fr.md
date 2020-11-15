---
layout: default
title: "Gamebuino META Feature"
permalink: /meta-feature-fr/
---

<div class="row">
  <div class="col-md-8">
    <div class="d-flex justify-content-between">
      <div>
        <h1> Manuel de la Gamebuino META </h1>
      </div>
    </div>
    <div class="mt-5 white-container">
      <h2><i class="fa fa-align-left"></i> Vue d'ensemble</h2> 
      <p>La Gamebuino META permet aux joueurs de jouer aux jeux pixelisés qu'ils aimaient sur une console compacte. Ils peuvent aussi apprendre à programmer leurs propres jeux. La Gamebuino META peux se glisser dans la poche, elle permet de jouer à des tonnes de jeux gratuits, et a assez de charge pour tenir une journée complète non-stop. La carte SD peut contenir plus de jeux que tu ne sera capable d'en jouer, et passer d'un jeu à un autre se fait en quelques secondes.</p> 
      <p><strong>Specs:</strong></p> 
      <ul>
       <li><strong>Dimensions:</strong> 105mm x 54mm x 17mm</li>
       <li><strong>Microcontroller:</strong> ATSAMD21, 32bit ARM Cortex M0+, 256KB flash, 32KB RAM (même que l'Arduino Zero)</li>
       <li><strong>Affichage:</strong> 1.8", 80*64px RGB 16bit affichage couleur (ou 160*128px, 16 couleurs indexées). 25 images par second par défaut, jusqu'à 50FPS.</li>
       <li><strong>Batterie:</strong> 900mAh, chargé avec un port micro USB B (comme beaucoup de téléphones).</li>
       <li><strong>Lumières arrières:</strong> 8 DEL RGB indépendamment contrôlable pour des effet de lumière dans tes mains!</li>
       <li><strong>Buttons:</strong> 8 buttons: D-pad, A, B, Home, Menu.</li>
       <li><strong>Son:</strong> 10bit DAC, multi-channel 8bit avec lecture de WAV, 2.5W class-D amp audio, audio jack 3.5mm, haut-parleur 1W.</li>
      </ul> 
      <h2><i class="fa fa-info-circle"></i> Comment utiliser la Gamebuino</h2> 
      <img src="./../assets/meta.png" style="width: 70%; display: block; vertical-align: top; margin: 5px auto;" class="fr-photo"> 
      <ul>
       <li><i class="fa fa-power-off"></i> <strong>Alimentation</strong> L’interrupteur qui vous permet d’allumer et éteindre votre console.</li>
       <li><i class="fa fa-gamepad"></i> <strong>Carte SD</strong> La carte mémoire micro SD où vous mettez tous les jeux en utilisant l’adaptateur USB fourni.</li>
       <li><i class="fa fa-headphones"></i> <strong>Jack audio:</strong> La prise audio jack 3.5mm pour brancher vos écouteurs et haut-parleurs. Ne pas écouter trop fort.</li>
       <li><strong>USB:</strong> Le port micro USB pour créer vos jeux et charger la batterie. Compatible avec tout chargeur micro USB.</li>
       <li><i class="fa fa-undo"></i> <strong>Reset</strong> Double cliquez pour charger le loader de la carte SD (si présent), sinon la console ira en mode bootloader.</li>
       <li><i class="fa fa-check"></i> <strong>Bouton A</strong> Sélectionner / Action principale</li>
       <li><i class="fa fa-times"></i> <strong>Bouton B</strong> Annuler / Action secondaire</li>
       <li><i class="fa fa-bars"></i> <strong>Menu</strong> Menu dépendant du jeu, peut être utilisé pour afficher l’inventaire, la carte, etc.</li>
       <li><i class="fa fa-home"></i> <strong>Home</strong> Sortir du jeu, ajuster le volume et les effets lumineux, faire des captures d’écran.</li>
      </ul>
      <h2><i class="fa fa-terminal"></i> Programmation</h2> 
      <p>Ta console n'a pas seulement été conçue en tant que console de jeu. Nous avons pris le temps d'en faire un outil de création. Tu peux programmer tes propres jeux en C++! Mettre en place l'environnement est simple, et les possibilités de jeu sont sans fin. Créer des jeux pour la Gamebuino META est vraiment pour tous, les débutants comme les experts.</p> 
      <h2><i class="fa fa-wrench"></i> Backpacks</h2> 
      <p>A l'arrière de ta Gamebuino, il y a une série d'entrées et de sorties. Ce sont tous les pins Arduino. Ils te permettent de faire de l'électronique avec ta console. Voici la disposition des pins:</p> 
      <p> <img src="./../assets/backpack_pins.png" style="width: 70%; display: block; vertical-align: top; margin: 5px auto;" class="fr-photo"> </p> 
      <p>Si besoin, n'hésite pas à l'imprimer. C'est assez pratique comme information ;)</p> 
      <p><strong>Developer backpack</strong></p> 
      <p>Nous proposons aussi un backpack pour faire des backpacks! On appelle ça le 'Developer backpack'. <img src="./../assets/backpack.jpg" style="width: 100%; display: block; vertical-align: top; margin: 5px auto;" class="fr-photo"></p> 
      <p>Cette simple extension te permet de séparer tous les pins à l'arrière pour qu'ils soient facilement accessibles. Ce backpack permet aussi de souder directement sur ta Gamebuino. Il est compatible avec les Arduino Shields.</p>
      <p><strong>Attention aux 3.3 volts !</strong></p>
      <p>La Gamebuino fonctionne en 3.3 volts, ne connectez pas d'alimentation 5 volts. Si vous ajoutez vos propres modules, veillez à ce qu'ils soient compatibles 3.3 volts.</p>
      <p><strong>Créer ton propre backpack</strong></p> 
      <p>Donc tu as eu une idée pour un backpack. Ensuite, tu l'as créé à l'aide du Developer Backpack. Tu l'as testé. Tu l'as amélioré. Et maintenant? Tu pourrais faire ton propre circuit imprimé à placer directement sur ta Gamebuino. Peut-être même le vendre. Nous voulons t'aider à créer, donc voici quelques fichiers qui t'aiderons :)</p> 
      <ul>
       <li><a class="fr-file" href="./../assets/skin_template.PDF">SKIN_TEMPLATE.PDF</a></li>
       <li><a class="fr-file" href="./../assets/backpack_template.PDF">BACKAPACK_TEMPLATE.PDF</a></li>
      </ul> 
    </div>
  </div>
</div>
