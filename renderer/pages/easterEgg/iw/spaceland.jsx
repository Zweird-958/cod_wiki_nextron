import Image from "next/image"
import GameScreen from "../../../components/GameScreen"
import SecondTitle from "../../../components/SecondTitle"
import Title from "../../../components/Title"

const EasterEggSpaceland = () => {
  const easterEggImages = "/../public/images/iw/spaceland/easterEgg/"

  return (
    <>
      <Title>Easter Egg</Title>
      <SecondTitle className="text-red-800">Prérequis</SecondTitle>
      <p className="text-center">
        Le secret est faisable de 1 à 4 joueurs. Vous aurez besoin d'avoir
        activer le pack à punch également.
      </p>
      <SecondTitle>Etape 1</SecondTitle>
      <p className="mx-auto max-w-3xl text-center">
        Vous devrez tout d'abord construire le SETI-COM. Il y a 3 pièces
        récupérer. La première est le parapluie, elle peut être trouver sur un
        banc à côté des tobogans,
      </p>
      <GameScreen src={`${easterEggImages}step1/first.png`} alt="test" />
      {/* <img src="/../public/images/iw.jpg" className="h-32 w-64" alt="step1" /> */}
    </>
  )
}

export default EasterEggSpaceland
