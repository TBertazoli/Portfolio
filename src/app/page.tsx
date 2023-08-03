import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {/* To include logo */}
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1> Tatiana Bertazoli</h1>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <div className={styles.grid}>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Portfolio <span>-&gt;</span>
          </h2>          
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About Me <span>-&gt;</span>
          </h2>          
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>          
        </a>

        <a
          href="../assets/Junior web developer - Resume.pdf"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Resume <span>-&gt;</span>
          </h2>
        </a>
      </div>
    </main>
  )
}


// import React, { useState } from 'react';
// import './App.css';
// import Nav from './components/Nav';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import ContactForm from './components/Contact';
// import Resume from './components/Resume';

// function App() {
//   const [contactSelected, setContactSelected] = useState(false);
//   const [portfolioSelected, setPortfolioSelected] = useState(false);
//   const [aboutMeSelected, setAboutMeSelected] = useState(true);
//   const [resumeSelected, setResumeSelected] = useState(false);

//   return (
//     <div>
//       <header>
//         <Nav
//           contactSelected={contactSelected}
//           setContactSelected={setContactSelected}
//           portfolioSelected={portfolioSelected}
//           setPortfolioSelected={setPortfolioSelected}
//           aboutMeSelected={aboutMeSelected}
//           setAboutMeSelected={setAboutMeSelected}
//           resumeSelected={resumeSelected}
//           setResumeSelected={setResumeSelected}
//         ></Nav>
//       </header>
//       <main>
//         {aboutMeSelected && <About></About>}
//         {portfolioSelected && <Portfolio></Portfolio>}
//         {contactSelected && <ContactForm></ContactForm>}
//         {resumeSelected && <Resume></Resume>}
//       </main>
//     </div >
//   );
// }


