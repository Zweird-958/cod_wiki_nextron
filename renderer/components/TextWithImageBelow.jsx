import GameScreen from "./GameScreen"
import ItemsDiv from "./ItemsDiv"
import Text from "./Text"

const TextWithImageBelow = (props) => {
  const { children, items } = props

  console.log(items)

  return (
    <>
      <Text>{children}</Text>
      <ItemsDiv className="gap-4">
        {items.map((item, index) => (
          <GameScreen
            key={index}
            src={item.src}
            alt={item.alt}
            onClick={item.onClick}
          />
        ))}
      </ItemsDiv>
    </>
  )
}

export default TextWithImageBelow
