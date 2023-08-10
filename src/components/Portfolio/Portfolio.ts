// import React from 'react';

// function Nav(props) {
//     const {
//         contactSelected,
//         setContactSelected,
//         portfolioSelected,
//         setPortfolioSelected,  
//         aboutMeSelected,
//         setAboutMeSelected,
//         resumeSelected,
//         setResumeSelected
//     } = props;

//     return (
//         <header>
//             <div className="main_title">
//                 <h1 >
//                     <a href="https://tbertazoli.github.io/react-portfolio">Tatiana Bertazoli</a>
//                 </h1>
//             </div>
//             <div className="navigation">
//                 <nav>
//                     <ul>
//                         <li className={`${aboutMeSelected && 'navActive'}`}>
//                             <a data-testid="about" href="#about" onClick={() => {
//                                 setAboutMeSelected(true);
//                                 setPortfolioSelected(false);
//                                 setContactSelected(false);
//                                 setResumeSelected(false);
//                             }}>
//                                 About me
//                             </a>
//                         </li>
//                         <li className={`${portfolioSelected && 'navActive'}`}>

//                             <span data-testid="portfolio" onClick={() => {
//                                 setAboutMeSelected(false);
//                                 setContactSelected(false);
//                                 setPortfolioSelected(true);
//                                 setResumeSelected(false);
//                             }}>Portfolio</span>
//                         </li>
//                         <li className={`${contactSelected && 'navActive'}`}>
//                             <a href="#contact" onClick={() => {
//                                 setAboutMeSelected(false);
//                                 setPortfolioSelected(false);
//                                 setContactSelected(true);
//                                 setResumeSelected(false);
//                             }}>
//                                 Contact
//                             </a>
//                         </li>
//                         <li className={`${resumeSelected && 'navActive'}`}>
//                             <span onClick={() => {
//                                 setResumeSelected(true);
//                                 setContactSelected(false);
//                                 setAboutMeSelected(false);
//                                 setPortfolioSelected(false);
//                             }}>
//                                 Resume
//                             </span>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header >
//     );
// }

// export default Nav;