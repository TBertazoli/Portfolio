// Type: Component File

import profilePic from "../../assets/pictures/DSC08249_2.jpg";
import styles from "../../page.module.css";
import Image from "next/image";
import Skills from "../../components/Skill";
import Link from "next/link";
import { TbArrowBackUpDouble } from "react-icons/tb";

export default function About() {
  return (
    <section>
      <div className={styles.cover}>
        <h2 className={styles.subtitle}>Professional Portfolio</h2>
      </div>
      <div id="about" className={styles.about_me}>
        <div className={styles.title}>
          <h2>About Me</h2>
          <Link href="/">
            <TbArrowBackUpDouble />
          </Link>
        </div>

        <div className={styles.description}>
          <Image
            src={profilePic}
            width={400}
            alt="profile"
            className={styles.profile_pic}
          ></Image>
          <p>
            Greetings! I'm Tatiana Bertazoli, a Junior Software Developer with a
            unique journey. Originally from Brazil, I initially pursued a degree
            in Chemistry. However, in 2010, my family and I relocated to Canada,
            where we spent 8 wonderful years. In 2018, we made another
            life-changing move, this time to Texas, and that's when I decided to
            embark on a new career path in web development. I took the plunge in
            2022 by enrolling in a bootcamp at Rice University. Since then, I've
            been diligently working on various small personal projects to
            enhance my skills and prepare for a career in this exciting field.
            My projects have been crafted using a variety of technologies,
            including HTML, CSS, JavaScript, Node.js, APIs, SQL, NoSQL,
            Express.js, and React. I'm eager to continue learning and grow as a
            web developer.
          </p>
        </div>

        <Skills></Skills>
      </div>
    </section>
  );
}
