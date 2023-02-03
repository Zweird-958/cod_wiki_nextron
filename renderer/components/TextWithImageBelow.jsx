import GameScreen from "./GameScreen"
import ItemsDiv from "./ItemsDiv"

const TextWithImageBelow = (props) => {
  const { children, items, onClick } = props

  return (
    <>
      <p className="mx-auto my-5 max-w-3xl text-center">{children}</p>
      <ItemsDiv className="gap-4">
        {items.map((item, index) => (
          <button onClick={onClick} key={index}>
            <GameScreen src={item.src} alt={item.alt} />
          </button>
        ))}
      </ItemsDiv>
    </>
  )
}

export default TextWithImageBelow
