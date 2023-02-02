import Head from "next/head"
import React from "react"
import ChooseGame from "../components/ChooseGame"
import ItemsDiv from "../components/ItemsDiv"
import { GAMES } from "../config/games"
import clsx from "clsx"
import Title from "../components/Title"

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>TITRE</title>
      </Head>
      <Title>HOME</Title>
      <ItemsDiv>
        {Object.values(GAMES).map((itemGame) =>
          //   <p key={name}>{name}</p>
          Object.entries(itemGame).map(([gameRoute, { image, label }]) => (
            <ChooseGame
              href={clsx("/games/", gameRoute)}
              key={gameRoute}
              className={`bg-${image}`}
            >
              {label}
            </ChooseGame>
          ))
        )}
      </ItemsDiv>
    </React.Fragment>
  )
}

export default Home
