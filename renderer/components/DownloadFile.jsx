const DownloadFile = (props) => {
  const { children, ...otherProps } = props

  return (
    <a className="text-red-600" {...otherProps}>
      {" "}
      {children}{" "}
    </a>
  )
}

export default DownloadFile
