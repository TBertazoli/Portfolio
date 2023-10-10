import styles from "./page.module.css";
import Link from "next/link";
import Contact from "./components/Contact";

// import Nav from './components/Nav';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
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

        <Link href="/pages/contact" className={styles.card}>
          Contact Me<span>-&gt;</span>
        </Link>

        <Link
          href="../assets/Junior web developer - Resume.pdf"
          className={styles.card}
        >
          Resume<span>-&gt;</span>
        </Link>
      </div>
    </main>
  );
}
