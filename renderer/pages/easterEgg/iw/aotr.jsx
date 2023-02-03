import { useState } from "react"
import SecondTitle from "../../../components/SecondTitle"
import TextWithImageBelow from "../../../components/TextWithImageBelow"
import Title from "../../../components/Title"
import clsx from "clsx"
import Image from "next/image"

const EasterEggSpaceland = () => {
  const easterEggImages = "/../public/images/iw/spaceland/easterEgg/"
  const [showImage, setShowImage] = useState("hidden")
  // const [currentImage, setCurrentImage] = useState("")

  const clickImage = () => {
    setShowImage(showImage === "hidden" ? "" : "hidden")
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
            { src: `${easterEggImages}step1/first.png`, alt: "test" },
            { src: `${easterEggImages}step1/second.png`, alt: "test" },
            { src: `${easterEggImages}step1/third.png`, alt: "test" },
          ]}
        >
          Vous allez récupérer des membres d'un zombie, vous aurez besoin du
          couperet qui se situé dans un requin dans le magasin. Le premier
          membre est son bras gauche, pour cela il suffit de tuer un zombie
          soldat (le premier, apparaît manche 5) avec le couperet.
        </TextWithImageBelow>
        <TextWithImageBelow
          items={[
            { src: `${easterEggImages}step1/fourth.png`, alt: "test" },
            { src: `${easterEggImages}step1/fifth.png`, alt: "test" },
            { src: `${easterEggImages}step1/sixth.png`, alt: "test" },
          ]}
          onClick={clickImage}
        >
          Il faudra ensuite trouver une calculatrice, elle se situe sur un banc
          à côté du Pack A Punch, sur un banc de table entre le piège manège et
          le crocodile ou sur une poubelle à l'étage de la salle d'arcade.
        </TextWithImageBelow>
        {/* <img src="/../public/images/iw.jpg" className="h-32 w-64" alt="step1" /> */}
      </div>
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-75",
          showImage
        )}
      >
        <div className="relative h-4/6 w-4/6">
          <Image
            src={`${easterEggImages}step1/fourth.png`}
            layout="fill"
            // width={750}
            // height={500}
            // style={{ width: "100%" }}
            className="rounded"
            alt="test"
          />
        </div>
      </div>

      {/* <div class="pin-t pin-l fixed m-auto h-64 w-64">
        <img
          src={`${easterEggImages}step1/fourth.png`}
          class="h-full w-full object-cover"
        />
      </div> */}
    </>
  )
}

export default EasterEggSpaceland
