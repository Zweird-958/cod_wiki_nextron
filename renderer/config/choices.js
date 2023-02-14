import RedLink from "../components/RedLink"

const MAPS = {
  spaceland: {
    easterEgg: [
      {
        text: "Le secret est faisable de 1 à 4 joueurs, vous aurez besoin du Pack à Punch et d’au moins une arme spéciale (une par joueur est recommandé).",
      },

      [
        {
          text: "Vous devrez tout d'abord construire le SETI-COM. Il y a 3 pièces récupérer. La première est le parapluie, elle peut être trouver sur un banc à côté des tobogans, sur un comptoir à Polar Peak ou au sol à côté du piège de la fusée.",
          images: ["first.png", "second.png"],
          title: ["Banc"],
        },
        {
          text: "Il faudra ensuite trouver une calculatrice, elle se situe sur un banc à côté du Pack A Punch, sur un banc de table entre le piège manège et le crocodile ou sur une poubelle à l'étage de la salle d'arcade.",
          images: ["first.png", "second.png"],
        },
        {
          text: "Et enfin la boom-box, elle peut se trouver sur le pont inférieur entre le spawn et le middle, sur le comptoir au levier du courant vers le crocodile, ou sur le comptoir de cuisine dans les sous-sol.",
          images: ["first.png", "second.png"],
        },
      ],
      [
        {
          text: "Une fois le SETI-COM construit allez parler au DJ, et faudra patienter quelques manches et des notes retentiront, votre écran tremblera. Retournez voir le DJ, il vous donnera le SETI-COM.",
          images: ["first.png", "second.png"],
        },
        {
          text: "Maintenant vous devrez trouver des lieux où le poser, pour savoir s’il s’agit du bon lieu votre écran tremblera et vous pourrez le placer. Vous devrez le poser 3 fois, une par manche, et le protéger des zombies un certains temps, 60; 90 et 120 secondes, une bonus munition max sera donné à chaque fois la protection terminé.",
          images: ["first.png", "second.png"],
        },
        {
          text: "Lorsque vous avez fini la 3ème protection allez parler le DJ, patientez 2 manches et retournez lui parler encore, il vous donnera des haut-parleurs. Il faudra les placer au chaque emplacement au middle. Et tous les joueurs devront utiliser leur touche d’action en même temps ce qui lancera le combat de boss.",
          images: ["first.png", "second.png"],
        },
      ],
    ],
    pap: [],
    weapons: {
      shredder: "Shredder",
      discord: "Discord",
    },
    shredder: [],
    discord: [],
  },
  ritr: {
    easterEgg: [
      {
        text: [
          "Le secret est faisable de 1 à 4 joueurs, les armes spéciales ne sont pas nécessaires mais fortement conseillé. Tout comme le",
          <RedLink key="ritrpap" href="/pap/ritr">
            Pack A Punch
          </RedLink>,
        ],
      },
      {
        text: [
          "Vous devrez récupérer les pièces du",
          <RedLink key="ritrpap" href="/bateau/ritr">
            bateau
          </RedLink>,
          ".",
        ],
      },
      [
        {
          text: "Vous devrez récupérer des bouts d’une photo, tout d’abord allez parler à Kévin. Le principe de cette étape est de tirer sur les zombies d’une façon spécifique, bras, jambes, tête. Si vous avez bien tiré dessus une lumière bleu ira vers l’endroit où vous avez posé la photo. Une fois tué assez, l’endroit sera illuminé maintenez votre touche d’action et un mini boss va apparaître. ⚠ Vous devez le tuer rapidement sinon l’étape ne sera pas validé, de plus vous perdrez un atout. Une fois vaincu il lâchera un bonus munition max et vous pourrez récupérer la photo où vous l’avez posé.",
        },
        {
          text: "Ensuite récupérer le premier bout de la photo qui se trouve derrière la scène à la Rave Party, placer le ensuite au feu de camp. Vous devrez tirer sur les bras de zombies. Une fois la pièce récupérée retournez parler à Kevin.",
        },
        {
          text: "Le second bout se trouve à l’étage du spawn vers mastodonte à l’entrée, placer le ensuite à la Rave Party. Vous devrez tirer sur les jambes de zombies. Une fois la pièce récupérée retournez parler à Kevin.",
        },
        {
          text: "Maintenant vous allez récupérer un crâne qui se trouve dans le sous-sol, où on active le courant. Allez le déposer à la plage et faites des tirs têtes.",
        },
      ],
      {
        label: "BOSS",
        texts: [
          {
            text: "Pour allez au boss rendez vous dans le sous-sol, tous les joueurs devront appuyer sur un interrupteur au niveau d’une lumière. Prenez maintenant le bateau et le combat commencera.",
          },
        ],
      },
    ],
    pap: [
      {
        text: "Vous devrez récupérer 2 bobines la première se trouve à côté du bateau et la deuxième à côté du bûcher au niveau de la maison sur l’île. Vous aurez juste à placer les bobines et l’accès au Pack A Punch sera ouvert.",
        images: [],
      },
    ],
    bateau: [
      {
        text: "La première pièce est le moteur situé contre un pilier en pierre. La deuxième pièce se trouve à l’étage du spawn dans la pièce de mastodonte. La dernière pièce se trouve à la Rave Party.",
        images: ["", "", ""],
      },
    ],
  },
  aotr: {
    easterEgg: [
      {
        text: "Le secret est faisable de 1 à 4 joueurs. Vous aurez besoin d'avoir activer le pack à punch également.",
      },
      [
        {
          images: ["couperet.png", "zombieSoldat.png"],
          text: "Vous allez récupérer des membres d'un zombie, vous aurez besoin du couperet qui se situé dans un requin dans le magasin. Le premier membre est son bras gauche, pour cela il suffit de tuer un zombie soldat (le premier, apparaît manche 5) avec le couperet.",
        },
        {
          images: ["zombieGrenade.png", "grillage.png", "car.png"],
          text: "Récupérer sa jambe gauche dans l'arbre à l'aide d'une grenade. Récupérer la pièce à côté au niveau des grillages. Ensuite sous la voiture il y a une pièce.",
        },
        {
          images: ["mirorBreak.png", "bench.png", "fireArm.png", "beach.png"],
          text: "Cassez le miroir dans les toilettes et récupérer le morceau. Il y a une pièce sur un banc dans le camping, et un bras du zombie dans le feu de camp. En allant vers la plage vous aurez une pièce sur un banc.",
        },
        {
          images: ["trap.png", "bridge.png"],
          text: "Activez le piège résonateur sur le bras de zombie sur la plage, une fois le bras sorti prenez-le. Sous le pont au fond de la plage, vous aurez une autre pièce.",
        },
        {
          images: ["freezeTrap.png", "freezeTrap2.png", "meat.png"],
          text: "Profitez en pour récupérer la pièce du piege du frigo vers le magasin. Mettez la pièce et activez le piège, une fois terminé cassez le bout de viande et récupérez le torse.",
        },
        {
          images: ["retro.png", "spawnShop.png"],
          text: "Cassez le retro de la voiture blanche et récupérez le. Il y aura une pièce sur un canapé dans le couloir entre le spawn et le magasin.",
        },

        {
          images: ["elvira.png", "grimoire.png", "map.png"],
          text: "Allez parler à Elvira, récupérer son grimoire au dinner et la carte à côté. Retournez voir Elvira donnez-lui son grimoire, elle vous donnera une fiole, il faudra tuer des zombies avec le couperet.",
        },
        {
          images: ["miror.png", "pap.png"],
          text: "Une fois remplie, reparlez à Elvira, elle se lèvera récupérez son miroir sur son siège, et emmenez là à un endroit pour activer le Pack A Punch.",
        },
        {
          images: ["button.png", "pappiece.png", "head.png"],
          text: "Allez dans le Pack A Punch, appuyez sur le bouton, resortez, une fois dans la caravane cassez le placard, prenez la pièce et récupérez la tête du zombie.",
        },
        {
          images: ["zombie.png", "miror1.png", "miror2.png", "miror3.png"],
          text: "Recomposez le zombie sur la table au spawn. Placez les miroirs aux 3 emplacements suivant.",
        },
        {
          images: [
            "code.png",
            "code2.png",
            "code3.png",
            "laser.png",
            "key.png",
          ],
          text: "Il faudra ensuite rentrer un code à 5 chiffres non connu (chaque point représente un chiffre allant de 0 à 9), chaque code est constitué de 3 4 5 6 8 il faudra juste trouver l'ordre. Une fois le code rentré il faudra activer le laser et rentrant un nouveau code qui sera le code précédent mais dans le sens inverse. Réactivez maintenant le laser puis récupérez les clés laissées par le zombie.",
        },
      ],
      [
        {
          images: ["code.png", "valve.png"],
          text: "Sous une table à côté du magasin il y a un code, il faudra régler chaque valve sur le niveau d'un chiffre du code (vous n'avez pas d'ordre à respecter).",
        },
        {
          images: ["valve2.png", "valve3.png", "valve4.png", "valve5.png"],
          text: "Les emplacements de chaque valve sont : station essence, à l'endroit du pied de biche, à côté de speed cola, derrière la cabane du courant.",
        },
        {
          images: ["bombCode.png"],
          text: "Une fois chaque chiffre rentré le coffre fort sera ouvert, récupérer le code de la bombe.",
        },
      ],
      [
        {
          text: "Maintenant il faudra trouver la valeur de PHI, pour la connaitre il faudra juste utiliser les filtres de couleurs et l'égal à côté du symbole PHI ne doit être barré sur n'importe quelle couleur.",
        },
        {
          images: ["phi.png", "phi2.png", "phi3.png", "phi4.png"],
          text: "Voici les emplacements de phi : au niveau du pont, dans le couleur entre le magasin et le spawn, dans une porte vitrée de la station service, sur un frigo à travers une vitre d'un camping-car",
        },
        {
          images: [],
          text: "Il faudra aussi la valeur de M qui est à l'accueil de l'hôtel. Il faudra donc faire PHI x M et comparer le résultat avec les nombres à côté des couleurs sur la télé.",
        },
        {
          images: [],
          text: [
            "Il faudra donc mettre la couleur correspondante pour voir les bonnes valeurs des ingrédients sur les panneaux. Pour la suite nous allons utiliser un",
            <RedLink
              key="programme"
              href="https://github.com/Kenshin9977/aotrt-chemicals/releases/download/1.0/AOTRT.-.Chemicals.FR.v1.0.exe"
            >
              programme
            </RedLink>,
            " développé par Kenshin9977.",
          ],
        },
        {
          images: [],
          text: "Le programme va demander certaines valeurs des tableaux en commençant du spawn, courant, garage, plage, camping, studio d'enregistrement.",
        },
        {
          images: [],
          text: "Le programme va ensuite vous demander quel mélange souhaitez-vous faire, pour savoir lequel est le bon faudra écouter des radios à l'aide d'une batterie, données par des zombies, il y a une radio au courant et à l'accueil de l'hôtel et le scientifique de la radio dira qu'un certain mélange sera la solution.",
        },
        {
          images: [],
          text: "Une fois le mélange entré le programme donnera les ingredients nécesseraires ainsi qu'un nombre à entrer au labo. Quand le mélange est fabriquée vous devez le mettre dans la bombe et que tous les joueurs de la partie appuie sur la touche d'action devant la bombe pour être téléportés au boss.",
        },
        {
          images: [],
          text: "⚠ Le code de la bombe disparaîtra à un moment alors noté le quelque part. ⚠",
        },
      ],
      {
        images: [],
        text: "🦀 BOSS 🦀",
      },
    ],
    pap: {},
  },
  shaolin: {
    easterEgg: [
      {
        text: "Tout d’abord il faudra que vous récupérez votre Chi et débloquer les shurikens, allez ensuite parler au Senseï. Une cage avec un rat aura apparu, jetez un shuriken et suivez le rat, il se remettra dans une cage, répétez cela jusqu’à qu’un cercle jaune apparaît. Maintenant vous devrez tuer des zombies dans le cercle, le cercle disparaitra et des zombies ninja vont apparaître tuez les et une clé sera droppé.",
      },
      {
        text: "Une fois la clé récupérer vous devrez ouvrir un casier qui se trouve au niveau du métro de double coup. Il faudra maintenant tirer sur des symboles dans un ordre précis. ⚠Attention si jamais vous tirez sur le mauvais symbole il faudra recommencer l’ordre de 0.⚠ Le premier symbole se trouve à côté du Dojo (celui de gauche), le deuxième est au niveau des toilettes de la discothèque (le deuxième), les derniers se trouvent vers la Volt (celui de gauche et celui du milieu).",
      },
      {
        text: "",
      },
    ],
  },
}

export default MAPS
