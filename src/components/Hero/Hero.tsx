import Link from "next/link";
import React from "react";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.headline}>Welcome to Annatar&apos;s World</h1>
        <p className={styles.body}>
          Annatar is a rising music producer with a unique sound that blends
          emotional melodies, hard-hitting drums, and atmospheric soundscapes.
          Explore his world and discover his music.
        </p>
        <Link href="/music" className={styles.cta}>
          Listen Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
