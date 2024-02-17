'use client'
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from './utils/useMousePosition'

export default function Home() {

  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5}}      
      >
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          A student passionate about learning something new every day, improve my skills, solve user and business issues and ultimately get shit done. fast.
        </p>
      </motion.div>
      <div className={styles.body}>
        <p>Hi, I'm <span>Pranav Bawgikar</span> your friendly neighborhood frontend developer who loves coding, creating things through art and photography.</p>
      </div>
    </main>
  );
}
