"use client";

import Image from "next/image";
import Skills from "../../components/Skill";
import { Typography } from "@mui/material";
import Contact from "@/app/components/Contact";
import { devices } from "@/app/components/Breakpoints";
import styled from "styled-components";

export default function About() {
  return (
    <section style={sectionCss}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="/">
          <h2>About Me</h2>
        </a>
        <Contact></Contact>
      </div>

      <div
        style={{
          display: "flex",
          padding: "30px 0 ",
        }}
      >
        <div style={{ marginRight: "50px" }}>
          <Typography variant="h6" component="p">
            Hello There! I&apos;m Tatiana Bertazoli, a Junior Software Developer
            with a journey that&apos;s a bit out of the ordinary. Originally
            from Brazil, I initially pursued a degree in Chemistry. However, in
            2010, my family and I relocated to Canada, where we spent 8
            wonderful years. In 2018, we made another life-changing move, this
            time to Texas, and that&apos;s when I decided to embark on a new
            career path in web development. I took the plunge in 2022 by
            enrolling in a Full Stack Software Development bootcamp at Rice
            University. Since then, I&apos;ve been diligently working on
            personal projects to enhance my skills and prepare for a career in
            this exciting field. My projects have been crafted using a variety
            of technologies, including HTML, CSS, JavaScript, Node.js, APIs,
            SQL, NoSQL, Express.js, and React. I&apos;m enthusiastic about
            continuing my journey of learnin and envolving as a web developer.
          </Typography>
        </div>
        <div>
          <Image
            src="/assets/pictures/DSC08249_2.jpg"
            alt="Tatiana Bertazoli's profile picture"
            style={profilePic}
            width={400}
            height={325}
          ></Image>
        </div>
      </div>
      <Skills></Skills>
    </section>
  );
}

// Styles

const profilePic = {
  boxShadow: "3px 4px 25px black",
  borderRadius: "10px",
};

const sectionCss = styled.section`
  padding: 30px 300px;

  @media ${devices.md} {
    padding: 30px 100px;
  }
`;

//     padding: "30px 100px";
// };
//   min-height: 100vh;
//   @media ${devices.md} {
//     padding: "30px 100px";
//   }
// `;
