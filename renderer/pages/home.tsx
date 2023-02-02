import Head from "next/head"
import React from "react"
import ChooseGame from "../components/ChooseGame"
import ItemsDiv from "../components/ItemsDiv"
import { GAMES } from "../config/games"
import clsx from "clsx"

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>TITRE</title>
      </Head>
      <h1 className="p-5 text-center text-2xl font-bold">HOME</h1>
      <ItemsDiv>
        {Object.entries(GAMES).map(([studioName, itemGame]) =>
          //   <p key={name}>{name}</p>
          Object.entries(itemGame).map(([gameName, { image }]) => (
            <ChooseGame
              href={clsx("games/", gameName)}
              key={gameName}
              className={`bg-${image}`}
            >
              {gameName}
            </ChooseGame>
          ))
        )}

        {/* <ChooseGame>Infinite Warfare</ChooseGame>
        <ChooseGame>Black Ops III</ChooseGame>
        <ChooseGame>Black Ops IV</ChooseGame> */}
      </ItemsDiv>
    </React.Fragment>
  )
}

export default Home
