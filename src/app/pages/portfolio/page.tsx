"use client";

import React from "react";
import { projects } from "../../components/Projects";
import Modal from "../../components/Modal";
import Image from "next/image";
import styles from "../../page.module.css";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import { TbArrowBackUpDouble } from "react-icons/tb";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { autocompleteClasses } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
      <div id="portfolio">
        <div className={styles.title}>
          <h2>Portfolio</h2>
          <Link href="/">
            <ArrowBackIosIcon />
          </Link>
        </div>
        <div>
          {isModalOpen && (
            <Modal onClose={onClose} currentProject={currentProject} />
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
                <div style={{ position: "relative" }}>
                  <Image
                    src={`/assets/projects/${index}.png`}
                    alt={project.name}
                    width={500}
                    height={500}
                    // className={`${styles.prework}`}
                    sizes="(max-width: 1200px) auto, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <Carousel.Caption
                  className={styles.caption}
                  onClick={() => openLink(project, index)}
                >
                  <h3 className={styles.project_name}>{project.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
