import clsx from "clsx"

const SecondTitle = (props) => {
  const { children, className } = props

  return (
    <h2 className={clsx("p-5 text-center text-lg font-medium", className)}>
      {children}
    </h2>
  )
}

export default SecondTitle
