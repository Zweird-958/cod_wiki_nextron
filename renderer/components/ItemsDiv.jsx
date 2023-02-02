import clsx from "clsx"

const ItemsDiv = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <div
      className={clsx("flex flex-wrap justify-center", className)}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default ItemsDiv
