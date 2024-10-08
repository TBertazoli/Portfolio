"use client";
import styles from "./page.module.css";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainLayout}>
          <div className={styles.introduction}>
            <p>
              <code className={styles.code}>Welcome to my portfolio</code>
            </p>
          </div>

          <div className={styles.center}>
            <h1> Tatiana Bertazoli</h1>
          </div>
          <Nav></Nav>
        </div>
      </main>
      <Contact></Contact>
    </>
  );
}
