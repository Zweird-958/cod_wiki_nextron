import clsx from "clsx"

const Title = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <h1
      className={clsx("p-5 text-center text-2xl font-bold", className)}
      {...otherProps}
    >
      {children}
    </h1>
  )
}

export default Title
