"use client";

import { projects } from "../../components/Projects";
import Image from "next/image";
import styles from "../../page.module.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Contact from "@/app/components/Contact";
import { Typography } from "@mui/material";

export default function Portfolio() {
  return (
    <>
      <main className={styles.main}>
        <Container>
          <div>
            <a href="/">
              <h2>Portfolio</h2>
            </a>
          </div>
          <div className="mt-5">
            <div>
              {projects.map((project, index) => (
                <Row
                  key={index}
                  className={styles.description}
                  style={{ marginBottom: "50px" }}
                >
                  <h4>{project.name}</h4>
                  <Col>
                    <Typography
                      variant="h6"
                      component="p"
                      style={{ margin: "20px 0" }}
                    >
                      {project.description}
                    </Typography>
                    <Button style={{ marginRight: "10px" }}>
                      <a href={project.website}>LAUNCH</a>
                    </Button>
                    <Button>
                      <a href={project.repository}>GITHUB</a>
                    </Button>
                  </Col>
                  <Col className={styles.projectCard}>
                    <Image
                      id="image"
                      src={project.image}
                      alt={project.name}
                      className={styles.image}
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
      </main>
    </>
  );
}
