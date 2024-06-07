"use client";

import { projects } from "../../components/Projects";
import Image from "next/image";
import styles from "../../page.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

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
          {projects.map((project, index) => (
            <Row key={index} style={{ marginBottom: "30px" }}>
              <Col>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <Button>LEARN MORE</Button>
              </Col>
              <Col>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={300}
                />
              </Col>
            </Row>
          ))}
        </div>
      </Container>
      <Contact></Contact>
    </>
  );
}
