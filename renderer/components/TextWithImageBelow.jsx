import GameScreen from "./GameScreen"
import ItemsDiv from "./ItemsDiv"

const TextWithImageBelow = (props) => {
  const { children, items } = props

  return (
    <>
      <p className="mx-auto my-5 max-w-3xl text-center">{children}</p>
      <ItemsDiv className="gap-4">
        {items.map((item, index) => (
          <GameScreen key={index} src={item.src} alt={item.alt} />
        ))}
        {/* <GameScreen src={`${easterEggImages}step1/fourth.png`} alt="test" />
        <GameScreen src={`${easterEggImages}step1/fifth.png`} alt="test" />
        <GameScreen src={`${easterEggImages}step1/sixth.png`} alt="test" /> */}
      </ItemsDiv>
    </>
  )
}

export default TextWithImageBelow
