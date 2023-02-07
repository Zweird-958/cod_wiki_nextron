import clsx from "clsx"
import { motion } from "framer-motion"
import Link from "next/link"

const variants = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
}

const LinkImage = (props) => {
  const { children, className, href, url, ...otherProps } = props

  return (
    <Link href={href}>
      <motion.div
        whileHover="show"
        animate="hide"
        initial="hide"
        className={clsx(
          "m-5 flex cursor-pointer items-center justify-center rounded bg-blue-600 bg-cover bg-center shadow-md grayscale hover:grayscale-0",
          className
        )}
        style={{
          backgroundImage: `url(${url})`,
        }}
        {...otherProps}
      >
        <motion.p variants={variants}>{children}</motion.p>
      </motion.div>
    </Link>
  )
}

export default LinkImage
