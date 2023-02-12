import ChooseGame from "@/components/ChooseGame"
import ItemsDiv from "@/components/ItemsDiv"
import Title from "@/components/Title"
import MAPS from "@/config/choices"
import CHOICES_LABEL from "@/config/choicesLabel"
import getMapGameAndRoute from "@/utils/getMapGameAndRoute"
import { useRouter } from "next/router"
import DefaultErrorPage from "next/error"

const MapPage = () => {
  const router = useRouter()
  const mapName =
    router.query.mapName !== undefined && router.query.mapName.trim()

  const { mapRoute, currentMap, gameRoute } = getMapGameAndRoute(mapName)

  const mapChoices = MAPS[mapName]

  if (!mapChoices) {
    return <DefaultErrorPage statusCode={404} />
  }

  const createComponent = (choice) => {
    return (
      <ChooseGame
        href={`/${choice}/${mapRoute}`}
        key={choice}
        url={`/images/${gameRoute}/${mapRoute}/${choice}/cover.jpg`}
      >
        {CHOICES_LABEL[choice] ?? choice}
      </ChooseGame>
    )
  }

  if (!mapChoices) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Title>{currentMap.label}</Title>
      <ItemsDiv>
        {Object.keys(mapChoices).map((choice) => (
          <>
            {mapChoices["weapons"]
              ? !mapChoices["weapons"][choice] && createComponent(choice)
              : createComponent(choice)}
          </>
        ))}
      </ItemsDiv>
    </>
  )
}

export default MapPage
