"use client";

import React from "react";
import styles from "../page.module.css";
import ListGroup from "react-bootstrap/ListGroup";

function Skills() {
  return (
    <section>
      <div className={styles.title}>
        <h2>Skills</h2>
      </div>
      <div className={styles.description}>
        <ListGroup>
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>JQuery</ListGroup.Item>
          <ListGroup.Item>Responsive design</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>Bootstrap</ListGroup.Item>
          <ListGroup.Item>API</ListGroup.Item>
          <ListGroup.Item>Node.js</ListGroup.Item>
          <ListGroup.Item>Express.js</ListGroup.Item>
          <ListGroup.Item>MySQL</ListGroup.Item>
          <ListGroup.Item>Sequelize</ListGroup.Item>
          <ListGroup.Item>MoongoDB</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
        </ListGroup>
      </div>
    </section>
  );
}

export default Skills;
