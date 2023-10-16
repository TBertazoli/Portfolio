"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Contact from "./components/Contact";

import file from "./assets/Software developer - Resume.pdf";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        <p>
          <code className={styles.code}>Welcome to my portfolio</code>
        </p>
      </div>

      <div className={styles.center}>
        <h1> Tatiana Bertazoli</h1>
      </div>

      <Contact></Contact>

      <div className={styles.grid}>
        <Link href="/pages/portfolio" className={styles.card}>
          Portfolio<span>-&gt;</span>
        </Link>

        <Link href="/pages/about" className={styles.card}>
          About Me<span>-&gt;</span>
        </Link>

        <Link href={file} className={styles.card}>
          Resume<span>-&gt;</span>
        </Link>
      </div>
    </main>
  );
}
