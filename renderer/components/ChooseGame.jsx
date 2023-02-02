import LinkImage from "./LinkImage"
import clsx from "clsx"

const ChooseGame = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <LinkImage className={clsx("h-32 w-32", className)} {...otherProps}>
      {children}
    </LinkImage>
  )
}

export default ChooseGame
