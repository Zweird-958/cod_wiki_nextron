import { GAMES } from "../../config/games"
import ChooseGame from "../../components/ChooseGame"
import ItemsDiv from "../../components/ItemsDiv"
import { useRouter } from "next/router"
import Title from "/components/Title"
import clsx from "clsx"

const MapPage = () => {
  const router = useRouter()
  const mapName = router.query.mapName.trim()

  const getMap = () => {
    for (const studioGames of Object.values(GAMES)) {
      for (const game of Object.keys(studioGames)) {
        for (const map of Object.keys(studioGames[game].maps)) {
          if (map === mapName) {
            return {
              gameRoute: game,
              mapRoute: mapName,
              currentMap: studioGames[game].maps[mapName],
            }
          }
        }
      }
    }
  }

  const { gameRoute, mapRoute, currentMap } = getMap()

  return (
    <>
      <Title>{currentMap.label}</Title>
      <ItemsDiv>
        {Object.entries(currentMap.choices).map(
          ([choiceRoute, { image, label }]) => (
            <ChooseGame
              href={`/${choiceRoute}/${gameRoute}/${mapRoute}`}
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
