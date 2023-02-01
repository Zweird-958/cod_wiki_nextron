import { motion } from "framer-motion"

const variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

const ChooseGame = (props) => {
  const { children } = props

  return (
    <motion.div
      whileHover="show"
      animate="hide"
      className="m-5 flex h-32 w-32 items-center justify-center rounded bg-blue-600 shadow-md"
    >
      <motion.p variants={variants}>{children}</motion.p>
    </motion.div>
  )
}

export default ChooseGame
