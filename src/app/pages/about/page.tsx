"use client";

import Image from "next/image";
import styles from "../../page.module.css";
import Skills from "../../components/Skill";
import { Typography } from "@mui/material";
import Contact from "@/app/components/Contact";
import { Row, Col, Container } from "react-bootstrap";

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="/">
              <h2>About Me</h2>
            </a>
          </div>
          <Row className={styles.description}>
            <Col className={styles.aboutMeSection}>
              <Typography
                variant="h6"
                component="p"
                style={{ textAlign: "justify" }}
              >
                Hello There! I&apos;m Tatiana Bertazoli, a Full-Stack Software
                Engineer with a journey that&apos;s a bit out of the ordinary.
                Originally from Brazil, I initially pursued a degree in
                Chemistry. However, in 2010, my family and I relocated to
                Canada, where we spent 8 wonderful years. In 2018, we made
                another life-changing move, this time to Texas, and that&apos;s
                when I decided to embark on a new career path in web
                development.
              </Typography>
            </Col>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/assets/pictures/DSC08249_2.jpg"
                alt="Tatiana Bertazoli's profile picture"
                className={styles.image}
                width={290}
                height={225}
              ></Image>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Typography
                variant="h6"
                component="p"
                style={{ textAlign: "justify" }}
              >
                In 2022, I took a major step by enrolling in a Full Stack
                Software Development bootcamp at Rice University. Since then,
                I&apos;ve been passionately working on personal projects using
                technologies like HTML, CSS, JavaScript, Node.js, APIs, SQL,
                NoSQL, Express.js, and React to build my skills.
              </Typography>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Typography
                variant="h6"
                component="p"
                style={{ textAlign: "justify" }}
              >
                In 2024, I was selected by Adobe to be part of their Adobe
                Digital Academy, an initiative for career switchers. Later, I
                was invited to intern as a software engineer at Adobe, where I
                further refined my development skills in a professional setting.
                I also gained valuable experience as a product management intern
                at BirdogIt, which gave me insight into the product development
                lifecycle and enhanced my ability to work cross-functionally
                with different teams. I&apos;m excited to continue this journey,
                constantly learning and evolving as a web developer!
              </Typography>
            </Col>
          </Row>
        </Container>
        <Skills></Skills>
      </main>
      <Contact></Contact>
    </>
  );
}
