import { GAMES } from "../../config/games"
import ChooseGame from "../../components/ChooseGame"
import ItemsDiv from "../../components/ItemsDiv"
import { useRouter } from "next/router"

const StudioPage = () => {
  const router = useRouter()
  const studioName = router.query.studioName
  const currentGames = GAMES[studioName.trim()]

  return (
    <ItemsDiv>
      {Object.entries(currentGames).map(([name, { image }]) => (
        //   <p key={name}>{name}</p>
        <ChooseGame href="/home" key={name} className={`bg-${image}`}>
          {name}
        </ChooseGame>
      ))}
    </ItemsDiv>
  )
}

export default StudioPage
