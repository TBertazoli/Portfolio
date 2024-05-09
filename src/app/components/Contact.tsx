import styles from "./../styles.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  return (
    <div className={styles.logo}>
      <a href="mailto:tatianabertazoli@gmail.com">
        <EmailIcon />
      </a>
      <a href="https://github.com/TBertazoli">
        <GitHubIcon />
      </a>
      <a href="https://linkedin.com/in/tatibertazoli">
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/TBertazoli">
        <XIcon />
      </a>
      <a href="tel:713-858-6951">
        <PhoneIcon />
      </a>
    </div>
  );
}
