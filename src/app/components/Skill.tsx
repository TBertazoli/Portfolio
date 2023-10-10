
import React from 'react';
import Image from 'next/image';
import Node from "../assets/logos/node.svg";
import styles from "../styles.module.css"

function Skills() {
    return (
        <section>
            <div className={styles.title}>
                <h2>Skills</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        JQuery
                    </li>
                    <li>
                        Responsive design
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Bootstrap
                    </li>

                    <li>
                        API
                    </li>
                    <li>
                        <a href="https://nodejs.org/en">Node.js<Image src={Node} alt=""></Image> </a>
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Sequelize
                    </li>
                    <li>
                        MoongoDB
                    </li>
                    <li>
                        React
                    </li>
                </ul>

            </div>
        </section>

    )
}

export default Skills;
