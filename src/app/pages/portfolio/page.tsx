"use client";

import React from "react";
import Modal from "../../components/Modal";
import Image from "next/image";
import styles from "../../page.module.css";
import Carousel from "react-bootstrap/Carousel";
import { edgeServerPages } from "next/dist/build/webpack/plugins/pages-manifest-plugin";

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

  const [projects] = React.useState([
    {
      name: "Prework Study Guide",
      description: "This project was an introduction of HTML and CSS",
      website: "https://tbertazoli.github.io/prework-study-guide/",
      repository: "https://github.com/TBertazoli/prework-study-guide",
    },
    {
      name: "Run Buddy",
      description:
        "This project was to develop a complete website using only HTML and CSS",
      website: "https://tbertazoli.github.io/run-buddy/",
      repository: "https://github.com/TBertazoli/run-buddy",
    },
    {
      name: "Horiseon",
      description: "",
      website: "https://tbertazoli.github.io/Horiseon/",
      repository: "https://github.com/TBertazoli/Horiseon",
    },
    {
      name: "Pizza Hunt",
      description:
        "This project wa to develop a website where you can create new pizzas and add comments",
      website: "https://pizza-bertazoli.herokuapp.com/",
      repository: "https://github.com/TBertazoli/pizza-hunt",
    },
    {
      name: "Project Fitness",
      description:
        "On this project I was responsible for writting the front-end JavaScript functionality. Created local storage and functions to store the weight, height and date. Created a function to calculate BMI and added a calendar to track the workout progress page.",
      website: "https://tbertazoli.github.io/Project-Fitness/",
      repository: "https://github.com/TBertazoli/Project-Fitness",
    },
    {
      name: "Lab Notebook",
      description:
        "This project was to develop a virtual lab notebook where users can create projects and experiments",
      website: "https://obscure-lake-69191.herokuapp.com/",
      repository: "https://github.com/emsaw721/lab-rats",
    },
    {
      name: "Oinc",
      description:
        "This project was to develop a budget app where users can add income and expenses and add budget",
      website: "https://guarded-gorge-65763.herokuapp.com/",
      repository: "https://github.com/emsaw721/stacks-on-stacks",
    },
  ]);

  return (
    <section>
      <div id="portfolio">
        <div className={styles.title}>
          <h2>Portfolio</h2>
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
                <div>
                  <Image
                    src={require(`../../assets/Projects/${index}.png`)}
                    alt={project.name}
                    className={styles.prework}
                  ></Image>
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
    </section>
  );
}
