const GameScreen = (props) => {
  const { ...otherProps } = props

  return (
    <div className="relative h-52 w-96 rounded border-2 border-blue-900">
      <new Image layout="fill" className="rounded" {...otherProps} />
    </div>
  )
}

export default GameScreen
