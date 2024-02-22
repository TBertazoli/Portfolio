import styles from "../../page.module.css";
import Image from "next/image";
import Skills from "../../components/Skill";
import Link from "next/link";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <section>
      <div>
        <div className={styles.title}>
          <h2>About Me</h2>
          <Link href="/">
            <ArrowBackIosIcon />
          </Link>
        </div>

        <div
          style={{
            padding: "0 300px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(169, 169, 169)",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div style={{ marginRight: "50px" }}>
                <Typography variant="h6" component="p" style={aboutMeText}>
                  Greetings! I&apos;m Tatiana Bertazoli, a Junior Software
                  Developer with a unique journey. Originally from Brazil, I
                  initially pursued a degree in Chemistry. However, in 2010, my
                  family and I relocated to Canada, where we spent 8 wonderful
                  years. In 2018, we made another life-changing move, this time
                  to Texas, and that&apos;s when I decided to embark on a new
                  career path in web development. I took the plunge in 2022 by
                  enrolling in a bootcamp at Rice University. Since then,
                  I&apos;ve been diligently working on various small personal
                  projects to enhance my skills and prepare for a career in this
                  exciting field. My projects have been crafted using a variety
                  of technologies, including HTML, CSS, JavaScript, Node.js,
                  APIs, SQL, NoSQL, Express.js, and React. I&apos;m eager to
                  continue learning and grow as a web developer.
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
          </div>
        </div>
      </div>
    </section>
  );
}

const profilePic = {
  boxShadow: "3px 4px 25px black",
  borderRadius: "10px",
};

const aboutMeText = {
  // fontFamily: "var(--font-mono)",
  // float: "left" as const,
  // marginRight: "50px",
};
