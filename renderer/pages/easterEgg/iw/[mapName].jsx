import clsx from "clsx"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import SecondTitle from "../../../components/SecondTitle"
import Text from "../../../components/Text"
import TextWithImageBelow from "../../../components/TextWithImageBelow"
import Title from "../../../components/Title"
import MAPS from "../../../config/easterEgg"
import getMapGameAndRoute from "../../../utils/getMapGameAndRoute"

const EasterEggMap = () => {
  const router = useRouter()
  const mapName =
    router.query.mapName !== undefined && router.query.mapName.trim()

  if (!mapName) {
    return
  }

  const { gameRoute } = getMapGameAndRoute(mapName)
  const easterEggImages = `/../public/images/${gameRoute}/${mapName}/easterEgg/`

  const [showImage, setShowImage] = useState("hidden")
  const [currentImage, setCurrentImage] = useState("")

  const clickImage = (imageSrc) => () => {
    setCurrentImage(imageSrc)
    setShowImage(showImage === "hidden" ? "" : "hidden")
  }

  return (
    <div className="">
      <Title>Easter Egg</Title>
      {MAPS[mapName].map((step, index) => (
        <>
          {index === 0 ? (
            <>
              <SecondTitle>Prérequis</SecondTitle>
              <Text>{step.text}</Text>
            </>
          ) : (
            <>
              <SecondTitle>ETAPE {index}</SecondTitle>
              <TextWithImageBelow
                items={step.images.map((image) => ({
                  src: easterEggImages + image,
                  alt: "test",
                  onClick: clickImage(easterEggImages + image),
                }))}
              >
                {step.text}
              </TextWithImageBelow>
            </>
          )}
        </>
      ))}

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
    </div>
  )
}

export default EasterEggMap
