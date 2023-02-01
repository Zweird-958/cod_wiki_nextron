import Head from "next/head"
import React from "react"
import ChooseGame from "../components/ChooseGame"

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>TITRE</title>
      </Head>
      <h1 className="p-5 text-center text-2xl font-bold">HOME</h1>
      <div className="flex flex-wrap justify-center">
        <ChooseGame>Infinite Warfare</ChooseGame>
        <ChooseGame>Black Ops III</ChooseGame>
        <ChooseGame>Black Ops IV</ChooseGame>
      </div>
    </React.Fragment>
  )
}

export default Home
