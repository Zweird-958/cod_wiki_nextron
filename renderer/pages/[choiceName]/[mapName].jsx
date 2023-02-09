import SecondTitle from "@/components/SecondTitle"
import Text from "@/components/Text"
import TextWithImageBelow from "@/components/TextWithImageBelow"
import Title from "@/components/Title"
import CHOICES_LABEL from "@/config/choicesLabel"
import MAPS from "@/config/choices"
import getMapGameAndRoute from "@/utils/getMapGameAndRoute"
import clsx from "clsx"
import DefaultErrorPage from "next/error"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

const MapChosen = () => {
  const router = useRouter()
  const [showImage, setShowImage] = useState("hidden")
  const [currentImage, setCurrentImage] = useState("")

  const mapName =
    router.query.mapName !== undefined && router.query.mapName.trim()

  const choiceName =
    router.query.choiceName !== undefined && router.query.choiceName.trim()

  if (!mapName || !choiceName) {
    return
  }

  const { gameRoute } = getMapGameAndRoute(mapName)
  const imagesFolder = `/images/${gameRoute}/${mapName}/${choiceName}/`

  const clickImage = (imageSrc) => () => {
    setCurrentImage(imageSrc)
    setShowImage(showImage === "hidden" ? "" : "hidden")
  }

  const createComponent = (item, index, globalIndex) => {
    return (
      <>
        {item.images ? (
          <TextWithImageBelow
            key={index}
            items={item.images.map((image) => ({
              src: `${imagesFolder}step${globalIndex ?? index}/${image}`,
              alt: "test",
              onClick: clickImage(
                `${imagesFolder}step${globalIndex ?? index}/${image}`
              ),
            }))}
          >
            {item.text}
          </TextWithImageBelow>
        ) : (
          <Text>{item.text}</Text>
        )}
      </>
    )
  }

  const mapObject = MAPS[mapName][choiceName]

  if (!mapObject) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <div className="">
      <Title>{CHOICES_LABEL[choiceName] ?? choiceName}</Title>
      {mapObject.map((step, index) => (
        <>
          {index === 0 && choiceName === "easterEgg" ? (
            <>
              <SecondTitle>{step.label ?? `Prérequis`}</SecondTitle>
              {createComponent(step)}
            </>
          ) : (
            <>
              {!step.label && index > 0 && (
                <SecondTitle>{step.label ?? `ETAPE ${index}`}</SecondTitle>
              )}
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

export default MapChosen
