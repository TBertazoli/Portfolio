import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// import Nav from './components/Nav';
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

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

      <div className={styles.logo}>
        <a href="mailto:tatianabertazoli@gmail.com">
          <AiOutlineMail />
        </a>
        <a href="https://github.com/TBertazoli">
          <AiOutlineGithub />
        </a>
        <a href="https://linkedin.com/in/tatibertazoli">
          <AiOutlineLinkedin />
        </a>
        <a href="https://twitter.com/TBertazoli">
          <AiOutlineTwitter />
        </a>
        <a href="tel:713-858-6951">
          <AiOutlinePhone />
        </a>
      </div>

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
