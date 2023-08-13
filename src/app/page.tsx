'use client'

import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

// import Nav from './components/Nav';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";


export default function Home() {

  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [aboutMeSelected, setAboutMeSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {/* To include logo */}
          <code className={styles.code}>Welcome to my portfolio</code>
        </p>

        <div className={styles.logo}>
          <a href="mailto:tatianabertazoli@gmail.com"><AiOutlineMail /></a>
          <a href="https://github.com/TBertazoli"><AiOutlineGithub /></a>
          <a href="https://linkedin.com/in/tatibertazoli"><AiOutlineLinkedin /></a>
          <a href="https://twitter.com/TBertazoli"><AiOutlineTwitter /></a>
          <a href="tel:713-858-6951"><AiOutlinePhone /></a>
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
          href="#portfolio"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          itemID='portfolio'
          onClick={() => {
            setAboutMeSelected(false);
            setPortfolioSelected(true);
            setContactSelected(false);
            setResumeSelected(false);
          }}
        >
          <h2 className={ `${portfolioSelected && 'navActive'}` } >
            Portfolio <span>-&gt;</span>
          </h2>
        </a>

        {/* <a
          href="/about"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          itemID='about'
          onClick={() => {
            
          }}
        >
          <h2 className={ `${aboutMeSelected && 'navActive'}` }>
            About Me <span>-&gt;</span>
          </h2>
        </a> */}
        <Link href="/pages/about">About Me<span>-&gt;</span></Link>
        
        
        <a
          href="#contact"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          itemID='contact'
          onClick={() => {
            setAboutMeSelected(false);
            setPortfolioSelected(false);
            setContactSelected(true);
            setResumeSelected(false);
          }}
        >
          <h2 className={ `${contactSelected && 'navActive'}` }>
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


