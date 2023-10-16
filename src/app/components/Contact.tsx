import React from "react";
import styles from "./../styles.module.css";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div className={styles.logo}>
      <a href="mailto:tatianabertazoli@gmail.com">
        <AiOutlineMail />
      </a>
      <a href="https://github.com/TBertazoli">
        <AiOutlineGithub />
      </a>
      <a href="https://linkedin.com/in/tatibertazoli">
        <AiOutlineLinkedin />
      </a>
      <a href="https://twitter.com/TBertazoli">
        <AiOutlineTwitter />
      </a>
      <a href="tel:713-858-6951">
        <AiOutlinePhone />
      </a>
    </div>
  );
}
