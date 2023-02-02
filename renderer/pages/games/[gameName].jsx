import { GAMES } from "../../config/games"
// import ChooseGame from "../../components/ChooseGame"
// import ItemsDiv from "../../components/ItemsDiv"
import { useRouter } from "next/router"

const GamePages = () => {
  const router = useRouter()
  const gameName = router.query.gameName
  //   const currentGames = GAMES[gameName.trim()]

  const getGame = () => {
    for (const studioGames of Object.values(GAMES))
      for (const game of Object.keys(studioGames))
        if (game === gameName.trim()) return studioGames
  }

  console.log(getGame())

  //   const [[result]] = getGame()
  //   console.log(result)
  //   console.log(result.choices)

  return (
    <p>test</p>
    // <p>{result.choices}</p>
    // Object.entries(result.choices).map((item) => <p key={item}>{item}</p>)
    //   result
    // <ItemsDiv>
    //   {Object.entries(currentGames).map(([name, image]) => (
    //     //   <p key={name}>{name}</p>
    //     <ChooseGame href="/home" key={name} className={`bg-${image}`}>
    //       {name}
    //     </ChooseGame>
    //   ))}
    // </ItemsDiv>
  )
}

export default GamePages
