import { useRouter } from "next/router"
import ChooseGame from "@/components/ChooseGame"
import ItemsDiv from "@/components/ItemsDiv"
import getMapGameAndRoute from "@/utils/getMapGameAndRoute"
import Title from "@/components/Title"
import MAPS from "@/config/choices"
import CHOICES_LABEL from "@/config/choicesLabel"

const MapPage = () => {
  const router = useRouter()
  const mapName =
    router.query.mapName !== undefined && router.query.mapName.trim()

  const { mapRoute, currentMap, gameRoute } = getMapGameAndRoute(mapName)

  const mapChoices = MAPS[mapName]

  return (
    <>
      <Title>{currentMap.label}</Title>
      <ItemsDiv>
        {Object.keys(mapChoices).map((choice) => (
          <ChooseGame
            href={`/${choice}/${mapRoute}`}
            key={choice}
            url={`/images/${gameRoute}/${mapRoute}/${choice}/cover.jpg`}
            // className={`bg-${image}`}
          >
            {CHOICES_LABEL[choice] ?? choice}
          </ChooseGame>
        ))}
      </ItemsDiv>
    </>
  )

  // <ItemsDiv>
  //   {Object.entries(currentGames).map(([name, image]) => (
  //     //   <p key={name}>{name}</p>
  //     <ChooseGame href="/home" key={name} className={`bg-${image}`}>
  //       {name}
  //     </ChooseGame>
  //   ))}
  // </ItemsDiv>
}

export default MapPage
