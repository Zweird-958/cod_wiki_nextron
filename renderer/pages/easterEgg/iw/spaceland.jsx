import SecondTitle from "../../../components/SecondTitle"
import TextWithImageBelow from "../../../components/TextWithImageBelow"
import Title from "../../../components/Title"

const EasterEggSpaceland = () => {
  const easterEggImages = "/../public/images/iw/spaceland/easterEgg/"

  return (
    <div className="">
      <Title>Easter Egg</Title>
      <SecondTitle className="text-red-800">Prérequis</SecondTitle>
      <p className="text-center">
        Le secret est faisable de 1 à 4 joueurs. Vous aurez besoin d'avoir
        activer le pack à punch également.
      </p>
      <SecondTitle>Etape 1</SecondTitle>
      <TextWithImageBelow
        items={[
          { src: `${easterEggImages}step1/first.png`, alt: "test" },
          { src: `${easterEggImages}step1/second.png`, alt: "test" },
          { src: `${easterEggImages}step1/third.png`, alt: "test" },
        ]}
      >
        Vous devrez tout d'abord construire le SETI-COM. Il y a 3 pièces
        récupérer. La première est le parapluie, elle peut être trouver sur un
        banc à côté des tobogans, sur un comptoir à Polar Peak ou au sol à côté
        du piège de la fusée.
      </TextWithImageBelow>
      <TextWithImageBelow
        items={[
          { src: `${easterEggImages}step1/fourth.png`, alt: "test" },
          { src: `${easterEggImages}step1/fifth.png`, alt: "test" },
          { src: `${easterEggImages}step1/sixth.png`, alt: "test" },
        ]}
      >
        Il faudra ensuite trouver une calculatrice, elle se situe sur un banc à
        côté du Pack A Punch, sur un banc de table entre le piège manège et le
        crocodile ou sur une poubelle à l'étage de la salle d'arcade.
      </TextWithImageBelow>
      {/* <img src="/../public/images/iw.jpg" className="h-32 w-64" alt="step1" /> */}
    </div>
  )
}

export default EasterEggSpaceland
