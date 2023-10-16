import React from "react";
import Image from "next/image";
import styles from "../styles.module.css";

interface ModalProps {
  onClose: () => void;
  currentProject:
    | {
        name: string;
        description: string;
        website: string;
        repository: string;
        index: number;
      }
    | undefined;
}

const Modal = ({ onClose, currentProject }: ModalProps) => {
  const { name, description, website, repository, index } =
    currentProject || {};

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <h3 className={styles.modalTitle}>{name} </h3>
        <div>
          <a href={website}>
            <Image
              className={styles.modalImage}
              src={require(`../assets/projects/${index}.png`)}
              alt="current project"
            ></Image>
          </a>
        </div>
        <p>{description}</p>
        <p>
          <a href={repository}>Git Hub Repository</a>
        </p>
        <button type="button" className={styles.button72} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
