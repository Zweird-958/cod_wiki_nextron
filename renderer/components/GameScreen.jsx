import Image from "next/image"
import { motion } from "framer-motion"

const GameScreen = (props) => {
  const { src, alt, ...otherProps } = props

  return (
    <motion.div
      whileInView={{ y: 0 }}
      initial={{ y: 100 }}
      viewport={{ once: true }}
      className="relative h-52 w-96 rounded border-2 border-blue-900"
    >
      <Image
        layout="fill"
        className="rounded"
        src={src}
        alt={alt}
        {...otherProps}
      />
    </motion.div>
  )
}

export default GameScreen
