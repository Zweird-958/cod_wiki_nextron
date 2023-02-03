import { useState } from "react"
import SecondTitle from "../../../components/SecondTitle"
import TextWithImageBelow from "../../../components/TextWithImageBelow"
import Title from "../../../components/Title"
import clsx from "clsx"
import Image from "next/image"

const EasterEggSpaceland = () => {
  const easterEggImages = "/../public/images/iw/spaceland/easterEgg/"
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
          soldat (le premier, apparaît manche 5) avec le couperet.
        </TextWithImageBelow>
        <TextWithImageBelow
          items={[
            {
              src: images.fourth,
              alt: "test",
              onClick: clickImage(images.fourth),
            },
            {
              src: images.fifth,
              alt: "test",
              onClick: clickImage(images.fifth),
            },
            {
              src: images.sixth,
              alt: "test",
              onClick: clickImage(images.sixth),
            },
          ]}
          onClick={clickImage}
        >
          Il faudra ensuite trouver une calculatrice, elle se situe sur un banc
          à côté du Pack A Punch, sur un banc de table entre le piège manège et
          le crocodile ou sur une poubelle à l'étage de la salle d'arcade.
        </TextWithImageBelow>
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
