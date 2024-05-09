"use client";

import React from "react";
import { projects } from "../../components/Projects";
import ModalComp from "../../components/Modal";
import Image from "next/image";
import styles from "../../page.module.css";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import { TbArrowBackUpDouble } from "react-icons/tb";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AspectRatio from "@mui/joy/AspectRatio";
import Contact from "@/app/components/Contact";
import Item from "@mui/material/Grid";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentProject, setCurrentProject] = React.useState();
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const openLink = (project: any, index: number) => {
    setCurrentProject({ ...project, index: index });
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* <Container maxWidth="md">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="/">
            <h2>Portfolio</h2>
          </a>
          <Contact></Contact>
        </div>
        <div>
          {isModalOpen && (
            <ModalComp onClose={onClose} currentProject={currentProject} />
          )}
        </div>
        <div className={styles.description_portfolio}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className={styles.carousel}
          >
            {projects.map((project, index) => (
              <Carousel.Item key={project.name}>
                <Card
                  raised
                  sx={{
                    maxWidth: 500,
                    margin: "0 auto",
                    padding: "0.1em",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                  />

                  <Carousel.Caption
                    className={styles.caption}
                    onClick={() => openLink(project, index)}
                  >
                    <h3 className={styles.project_name}>{project.name}</h3>
                  </Carousel.Caption>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container> */}
      <Container maxWidth="md">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="/">
            <h2>Portfolio</h2>
          </a>
          <Contact></Contact>
        </div>

        {projects.map((project, index) => (
          <Grid container rowSpacing={2} columnSpacing={1} key={index}>
            <Grid md={6}>
              <Item>{project.description}</Item>
            </Grid>
            <Grid md={6}>
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={250}
              />
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
}
