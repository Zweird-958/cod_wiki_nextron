import clsx from "clsx"

const Icon = (props) => {
  const { icon, onClick, title, className, ...otherProps } = props

  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx("mx-1 h-6 w-6", className)}
      {...otherProps}
    >
      <title>{title}</title>
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  )
}

export default Icon
