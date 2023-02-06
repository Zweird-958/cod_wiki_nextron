import LinkImage from "./LinkImage"
import clsx from "clsx"

const ChooseGame = (props) => {
  const { children, className, test, ...otherProps } = props
  // console.log(url)
  // const result = clsx("bg-[url('", test, "')]")
  // console.log(test)

  return (
    <LinkImage
      style={{ backgroundImage: `url(${test})` }}
      className={clsx("h-32 w-32", className)}
      {...otherProps}
    >
      {children}
    </LinkImage>
  )
}

export default ChooseGame
