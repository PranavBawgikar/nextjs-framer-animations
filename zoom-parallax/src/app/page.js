'use client'
import styles from "./page.module.scss";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ZoomParallax from '@/components/ZoomParallax'

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className={styles.main}>
      <ZoomParallax />
    </main>
  );
}
