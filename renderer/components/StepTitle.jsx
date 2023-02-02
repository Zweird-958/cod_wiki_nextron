import clsx from "clsx"

const StepTitle = (props) => {
  const { children, className } = props

  return (
    <p className={clsx("text-md p-5 text-center", className)}>{children}</p>
  )
}

export default StepTitle
