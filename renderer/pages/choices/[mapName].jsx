import { useRouter } from "next/router"
import ChooseGame from "@/components/ChooseGame"
import ItemsDiv from "@/components/ItemsDiv"
import getMapGameAndRoute from "@/utils/getMapGameAndRoute"
import Title from "@/components/Title"

const MapPage = () => {
  const router = useRouter()
  const mapName =
    router.query.mapName !== undefined && router.query.mapName.trim()

  const { mapRoute, currentMap } = getMapGameAndRoute(mapName)

  return (
    <>
      <Title>{currentMap.label}</Title>
      <ItemsDiv>
        {Object.entries(currentMap.choices).map(
          ([choiceRoute, { image, label }]) => (
            <ChooseGame
              href={`/${choiceRoute}/${mapRoute}`}
              key={choiceRoute}
              className={`bg-${image}`}
            >
              {label}
            </ChooseGame>
          )
        )}
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
