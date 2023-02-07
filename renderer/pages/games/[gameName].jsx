import clsx from "clsx"
import { useRouter } from "next/router"
import ChooseMap from "@/components/ChooseMap"
import ItemsDiv from "@/components/ItemsDiv"
import { GAMES } from "@/config/games"
import Title from "@/components/Title"

const GamePages = () => {
  const router = useRouter()
  const gameName =
    router.query.gameName !== undefined && router.query.gameName.trim()

  const getGame = () => {
    for (const studioGames of Object.values(GAMES)) {
      for (const game of Object.keys(studioGames)) {
        if (game === gameName) {
          return studioGames[game]
        }
      }
    }
  }

  const currentGame = getGame()

  return (
    <>
      <Title>{currentGame.label}</Title>
      <ItemsDiv>
        {Object.entries(currentGame.maps).map(([mapRoute, { label }]) => (
          <ChooseMap
            href={clsx("/choices/", mapRoute)}
            key={mapRoute}
            url={`/images/${gameName}/${mapRoute}/cover.jpg`}
          >
            {label}
          </ChooseMap>
        ))}
      </ItemsDiv>
    </>
  )
}

export default GamePages
