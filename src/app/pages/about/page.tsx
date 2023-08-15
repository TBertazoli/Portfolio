// Type: Component File

import coverImage from '../../../assets/cover.jpg';
import profilePic from '../../../assets/DSC08249_2.jpg';
import styles from '../../styles.module.css'
import Image from 'next/image'


export default function About() {
    return (
        <section>
            <div className={styles.cover} >
                <h2 className={styles.subtitle}>
                    Professional Portfolio
                </h2>
                <Image
                    src={coverImage}
                    className={styles.cover_image}
                    alt="cover">
                </Image>
            </div>
            <div id="about" className={styles.about_me}>
                <div className={styles.title}>
                    <h2>About Me</h2>
                </div>
                <div className={styles.description}>
                    <Image src={profilePic} width={400} alt="profile" className={styles.profile_pic}></Image>
                    <p> &nbsp; Hello, I am Tatiana Bertazoli and I am a Junior Software Developer.
                        I was born and raised in Brazil where I got a degree in Chemistry.I moved to Canada in 2010 and spent 8 years there whith my family.
                        In 2018 we decided to move to Texas where I decided to pursue a new career in web development.
                        In 2022 I started a bootcamp at Rice University and so far I have been working on some small personal projects to improve my knowledge
                        until I am able to start working in this field.
                        My projects were written using HTML, CSS, JavaScript, Node.js, APIs, SQL, NoSQL, Express.js, React.
                    </p>
                </div>
                </div>
        </section>





    )
}







