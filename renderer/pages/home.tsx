import ChooseGame from "@/components/ChooseGame"
import ItemsDiv from "@/components/ItemsDiv"
import Title from "@/components/Title"
import { GAMES } from "@/config/games"
import clsx from "clsx"
import Head from "next/head"
import React from "react"

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TITRE</title>
      </Head>
      <Title>HOME</Title>
      <ItemsDiv>
        {Object.values(GAMES).map((itemGame) =>
          //   <p key={name}>{name}</p>
          Object.entries(itemGame).map(([gameRoute, { label }]) => (
            <ChooseGame
              href={clsx("/games/", gameRoute)}
              key={gameRoute}
              url={`images/${gameRoute}/cover.jpg`}
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
