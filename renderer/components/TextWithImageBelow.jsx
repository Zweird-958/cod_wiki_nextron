import GameScreen from "@/components/GameScreen"
import ItemsDiv from "@/components/ItemsDiv"
import Text from "@/components/Text"

const TextWithImageBelow = (props) => {
  const { children, items } = props

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
