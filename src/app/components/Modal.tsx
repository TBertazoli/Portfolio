import React from "react";
import Image from "next/image";
import styles from "../styles.module.css";
import Typography from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Modal from "@mui/material/Modal";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

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

const ModalComp = ({ onClose, currentProject }: ModalProps) => {
  const { name, description, website, repository, index } =
    currentProject || {};

  return (
    <div>
      <div style={{ textAlign: "end" }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ display: "-ms-flexbox" }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <Typography component="div" className={styles.modalContainer}>
        <h3 className={styles.modalTitle}>{name} </h3>

        <div>
          <a href={website}>
            <Image
              width={500}
              height={500}
              className={styles.modalImage}
              src={`/assets/projects/${index}.png`}
              alt="current project"
              style={{ maxWidth: "300px" }}
            ></Image>
          </a>
        </div>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ paddingBottom: "10px" }}
        >
          {description}
        </Typography>
        <a href={repository || ""}>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
      </Typography>
    </div>
  );
};

export default ModalComp;

{
  /* <IconButton href={project.website}>
<LaunchIcon />
</IconButton> */
}
