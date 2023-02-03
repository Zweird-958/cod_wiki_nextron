import { useState } from "react"
import SecondTitle from "../../../components/SecondTitle"
import TextWithImageBelow from "../../../components/TextWithImageBelow"
import Title from "../../../components/Title"
import clsx from "clsx"
import Image from "next/image"
import DownloadFile from "../../../components/DownloadFile"

const EasterEggSpaceland = () => {
  const easterEggImages = "/../public/images/iw/aotr/easterEgg/"
  const [showImage, setShowImage] = useState("hidden")
  const [currentImage, setCurrentImage] = useState("")

  const clickImage = (imageSrc) => () => {
    setCurrentImage(imageSrc)
    setShowImage(showImage === "hidden" ? "" : "hidden")
  }

  const images = {
    first: `${easterEggImages}step1/first.png`,
    second: `${easterEggImages}step1/second.png`,
    third: `${easterEggImages}step1/third.png`,
    fourth: `${easterEggImages}step1/fourth.png`,
    fifth: `${easterEggImages}step1/fifth.png`,
    sixth: `${easterEggImages}step1/sixth.png`,
  }

  return (
    <>
      <div className="">
        <Title>Easter Egg {showImage} </Title>
        <SecondTitle className="text-red-800">Prérequis</SecondTitle>
        <p className="text-center">
          Le secret est faisable de 1 à 4 joueurs. Vous aurez besoin d'avoir
          activer le pack à punch également.
        </p>
        <SecondTitle>Etape 1</SecondTitle>
        <TextWithImageBelow
          items={[
            {
              src: images.first,
              alt: "test",
              onClick: clickImage(images.first),
            },
            {
              src: images.second,
              alt: "test",
              onClick: clickImage(images.second),
            },
            {
              src: images.third,
              alt: "test",
              onClick: clickImage(images.third),
            },
          ]}
        >
          Vous allez récupérer des membres d'un zombie, vous aurez besoin du
          couperet qui se situé dans un requin dans le magasin. Le premier
          membre est son bras gauche, pour cela il suffit de tuer un zombie
          soldat (le premier, apparaît manche 5) avec le couperet. Récupérer sa
          jambe gauche dans l'arbre à l'aide d'une grenade. Récupérer la pièce à
          côté au niveau des grillages. Ensuite sous la voiture il y a une
          pièce. Cassez le miroir dans les toilettes et récupérer le morceau. Il
          y a une pièce sur un banc dans le camping. En allant vers la plage
          vous aurez une pièce sur un banc. Profitez en pour récupérer la pièce
          du piege du frigo vers le magasin. Mettez la pièce et activez le
          piège, une fois terminé cassez le bout de viande et récupérez le
          torse. Cassez le retro de la voiture blanche et récupérez le. Il y
          aura une pièce sur un canapé dans le couloir entre le spawn et le
          magasin. Activez le piège résonateur sur le bras de zombie sur la
          plage, une fois le bras sorti prenez-le. Sous le pont au fond de la
          plage, vous aurez une autre pièce. Allez parler à Elvira, récupérer
          son grimoire au dinner et la carte à côté. Retournez voir Elvira
          donnez-lui son grimoire, elle vous donnera une fiole, il faudra tuer
          des zombies avec le couperet. Une fois remplie, reparlez à Elvira,
          elle se lèvera récupérez son miroir sur son siège, et emmenez là à un
          endroit pour activer le Pack A Punch. Allez dans le Pack A Punch,
          appuyez sur le bouton, resortez, une fois dans la caravane cassez le
          placard, prenez la pièce et récupérez la tête du zombie. Recomposez le
          zombie sur la table au spawn. Placez les miroirs aux 3 emplacements
          suivant. Il faudra ensuite rentrer un code à 5 chiffres non connu
          (chaque point représente un chiffre allant de 0 à 9), chaque code est
          constitué de 3 4 5 6 8 il faudra juste trouver l'ordre. Une fois le
          code rentré il faudra activer le laser et rentrant un nouveau code qui
          sera le code précédent mais dans le sens inverse. Réactivez maintenant
          le laser puis récupérez les clés laissées par le zombie. Sous une
          table à côté du magasin il y a un code, il faudra régler chaque valve
          sur le niveau d'un chiffre du code (vous n'avez pas d'ordre à
          respecter). Une fois chaque chiffre rentré le coffre fort sera ouvert,
          récupérer le code de la bombe. Maintenant il faudra trouver la valeur
          de PHI, pour la connaitre il faudra juste utiliser les filtres de
          couleurs et l'égal à côté du symbole PHI ne doit être barré sur
          n'importe quelle couleur. Il faudra aussi la valeur de M qui est à
          l'accueil de l'hôtel. Il faudra donc faire PHI x M et comparer le
          résultat avec les nombres à côté des couleurs sur la télé. Il faudra
          donc mettre la couleur correspondante pour voir les bonnes valeurs des
          ingrédients sur les panneaux. Pour la suite nous allons utiliser un
          <DownloadFile href="https://github.com/Kenshin9977/aotrt-chemicals/releases/download/1.0/AOTRT.-.Chemicals.FR.v1.0.exe">
            programme
          </DownloadFile>
          développé par Kenshin9977. Le programme va demander certaines valeurs
          des tableaux en commençant du spawn, courant, garage, plage, camping,
          studio d'enregistrement. Le programme va ensuite vous demander quel
          mélange souhaitez-vous faire, pour savoir lequel est le bon faudra
          écouter des radios à l'aide d'une batterie, données par des zombies,
          il y a une radio au courant et à l'accueil de l'hôtel et le
          scientifique de la radio dira qu'un certain mélange sera la solution.
          Une fois le mélange entré le programme donnera les ingredients
          nécesseraires ainsi qu'un nombre à entrer au labo. Quand le mélange
          est fabriquée vous devez le mettre dans la bombe et que tous les
          joueurs de la partie appuie sur la touche d'action devant la bombe
          pour être téléportés au boss. ⚠ Le code de la bombe disparaîtra à un
          moment alors noté le quelque part. ⚠
        </TextWithImageBelow>
        {/* BOSS A ECRIRE */}
      </div>
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-75",
          showImage
        )}
        onClick={clickImage(undefined)}
      >
        <div className="relative h-4/6 w-4/6">
          <Image
            src={currentImage}
            layout="fill"
            className="rounded"
            alt="test"
          />
        </div>
      </div>
    </>
  )
}

export default EasterEggSpaceland
