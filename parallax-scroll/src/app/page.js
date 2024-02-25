import Image from "next/image";
import styles from "./page.module.css";
import Gsap from "@/components/Gsap/"

export default function Home() {
  return (
    <main className={styles.main}>
      <Gsap />
    </main>
  );
}
