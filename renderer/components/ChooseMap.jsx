import LinkImage from "./LinkImage"
import clsx from "clsx"

const ChooseMap = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <LinkImage className={clsx("h-32 w-52", className)} {...otherProps}>
      {children}
    </LinkImage>
  )
}

export default ChooseMap
