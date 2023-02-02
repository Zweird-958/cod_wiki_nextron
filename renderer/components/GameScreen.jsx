import Image from "next/image"

const GameScreen = (props) => {
  const { src, alt, ...otherProps } = props

  return (
    <div className="relative h-52 w-96 rounded border-2 border-blue-900">
      <Image
        layout="fill"
        className="rounded"
        src={src}
        alt={alt}
        {...otherProps}
      />
    </div>
  )
}

export default GameScreen
