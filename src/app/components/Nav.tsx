import Link from "next/link";
import styles from "./../page.module.css";

export default function Nav() {
  return (
    <div className={styles.grid}>
      <Link href="/pages/portfolio" className={styles.card}>
        Portfolio<span>-&gt;</span>
      </Link>

      <Link href="/pages/about" className={styles.card}>
        About Me<span>-&gt;</span>
      </Link>

      <Link
        href="/assets/Software developer - Resume.pdf"
        className={styles.card}
      >
        Resume<span>-&gt;</span>
      </Link>
    </div>
  );
}
