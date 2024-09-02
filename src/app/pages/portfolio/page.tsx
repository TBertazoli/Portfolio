"use client";

import { projects } from "../../components/Projects";
import Image from "next/image";
import styles from "../../page.module.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Contact from "@/app/components/Contact";

export default function Portfolio() {
  return (
    <>
      <Container>
        <div>
          <a href="/">
            <h2>Portfolio</h2>
          </a>
        </div>
        <div className="mt-5">
          <div className={styles.portfolio}>
            {projects.map((project, index) => (
              <Row key={index} style={{ marginBottom: "50px" }}>
                <Col>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <Button>LEARN MORE</Button>
                </Col>
                <Col className={styles.projectCard}>
                  <Image
                    id="image"
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={300}
                  />
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </Container>
      <Contact></Contact>
    </>
  );
}
