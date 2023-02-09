import clsx from "clsx"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import SecondTitle from "@/components/SecondTitle"
import Text from "@/components/Text"
import TextWithImageBelow from "@/components/TextWithImageBelow"
import Title from "@/components/Title"
import MAPS from "@/config/easterEgg"
import getMapGameAndRoute from "@/utils/getMapGameAndRoute"

const EasterEggMap = () => {
  const router = useRouter()
  const [showImage, setShowImage] = useState("hidden")
  const [currentImage, setCurrentImage] = useState("")

  const mapName =
    router.query.mapName !== undefined && router.query.mapName.trim()

  if (!mapName) {
    return
  }

  const { gameRoute } = getMapGameAndRoute(mapName)
  const easterEggImages = `/images/${gameRoute}/${mapName}/easterEgg/`

  const clickImage = (imageSrc) => () => {
    setCurrentImage(imageSrc)
    setShowImage(showImage === "hidden" ? "" : "hidden")
  }

  const createComponent = (item, index, globalIndex) => {
    return (
      <TextWithImageBelow
        key={index}
        items={item.images.map((image) => ({
          src: `${easterEggImages}step${globalIndex ?? index}/${image}`,
          alt: "test",
          onClick: clickImage(
            `${easterEggImages}step${globalIndex ?? index}/${image}`
          ),
        }))}
      >
        {item.text}
      </TextWithImageBelow>
    )
  }

  return (
    <div className="">
      <Title>Easter Egg</Title>
      {MAPS[mapName].map((step, index) => (
        <>
          {index === 0 ? (
            <>
              <SecondTitle>{step.label ?? `Prérequis`}</SecondTitle>
              <Text>{step.text}</Text>
            </>
          ) : (
            <>
              <SecondTitle>{step.label ?? `ETAPE ${index}`}</SecondTitle>
              {Array.isArray(step)
                ? step.map((item, itemIndex) =>
                    createComponent(item, itemIndex, index)
                  )
                : createComponent(step, index)}
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
