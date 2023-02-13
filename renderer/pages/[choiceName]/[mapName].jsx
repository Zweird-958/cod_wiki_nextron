import ChooseGame from "@/components/ChooseGame"
import ItemsDiv from "@/components/ItemsDiv"
import SecondTitle from "@/components/SecondTitle"
import Text from "@/components/Text"
import TextWithImageBelow from "@/components/TextWithImageBelow"
import Title from "@/components/Title"
import MAPS from "@/config/choices"
import CHOICES_LABEL from "@/config/choicesLabel"
import getMapGameAndRoute from "@/utils/getMapGameAndRoute"
import clsx from "clsx"
import Image from "next/image"
import DefaultErrorPage from "next/error"
import { useRouter } from "next/router"
import { useState } from "react"
import { motion } from "framer-motion"

const MapChosen = () => {
  const router = useRouter()
  const [showImage, setShowImage] = useState("hidden")
  const [currentImage, setCurrentImage] = useState({})
  const [hover, setHover] = useState("hide")

  const mapName =
    router.query.mapName !== undefined && router.query.mapName.trim()

  const choiceName =
    router.query.choiceName !== undefined && router.query.choiceName.trim()

  if (!mapName || !choiceName) {
    return
  }

  const { gameRoute } = getMapGameAndRoute(mapName)

  if (!gameRoute) {
    return <DefaultErrorPage statusCode={404} />
  }

  const imagesFolder = `/images/${gameRoute}/${mapName}/${choiceName}/`

  const clickImage = (imageObject) => () => {
    setCurrentImage(imageObject)
    setShowImage(showImage === "hidden" ? "" : "hidden")
  }

  const createComponent = (item, index, globalIndex) => {
    return (
      <>
        {item.images ? (
          <TextWithImageBelow
            key={index}
            items={item.images.map((image, imageIndex) => ({
              src: `${imagesFolder}step${globalIndex ?? index}/${image}`,
              alt: "test",
              onClick: clickImage({
                src: `${imagesFolder}step${globalIndex ?? index}/${image}`,
                title: item.title && item.title[imageIndex],
              }),
              title: item.title && item.title[imageIndex],
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

  const globalMapObject = MAPS[mapName]
  const mapObject = globalMapObject[choiceName]

  if (!mapObject) {
    return <DefaultErrorPage statusCode={404} />
  }

  const hoverVariants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  }

  return (
    <div className="">
      <Title>
        {CHOICES_LABEL[choiceName] ??
          globalMapObject["weapons"][choiceName] ??
          choiceName}
      </Title>
      {mapObject instanceof Object && !Array.isArray(mapObject) ? (
        <ItemsDiv>
          {Object.entries(mapObject).map(([route, label]) => (
            <ChooseGame
              key={route}
              href={`/${route}/${mapName}`}
              url={`/images/${gameRoute}/${mapName}/${route}/cover.jpg`}
            >
              {label}
            </ChooseGame>
          ))}
        </ItemsDiv>
      ) : (
        mapObject.map((step, index) => (
          <>
            {index === 0 && choiceName === "easterEgg" ? (
              <>
                <SecondTitle>{step.label ?? `Prérequis`}</SecondTitle>
                {createComponent(step)}
              </>
            ) : (
              <>
                {index > 0 && (
                  <SecondTitle>{step.label ?? `ETAPE ${index}`}</SecondTitle>
                )}
                {Array.isArray(step.texts || step)
                  ? step.texts
                    ? step.texts.map((item, itemIndex) =>
                        createComponent(item, itemIndex, index)
                      )
                    : step.map((item, itemIndex) =>
                        createComponent(item, itemIndex, index)
                      )
                  : createComponent(step, index)}
              </>
            )}
          </>
        ))
      )}

      <div
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-75",
          showImage
        )}
        onClick={clickImage({ src: "", title: "" })}
      >
        <div className="relative h-4/6 w-4/6">
          <Image
            src={currentImage.src}
            title={currentImage.title}
            layout="fill"
            className="rounded"
            alt="test"
            onMouseEnter={() => setHover("show")}
            onMouseLeave={() => setHover("hide")}
          />
          <motion.div
            variants={hoverVariants}
            animate={hover}
            className="bg-gray-opacity absolute bottom-0 z-10 flex h-12 w-full items-center justify-center text-xl text-white"
          >
            <p>{currentImage.title}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MapChosen
