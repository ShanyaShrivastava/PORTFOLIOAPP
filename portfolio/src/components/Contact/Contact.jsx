import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contacts/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shanyashrivastava2@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contacts/linkedinIcon.png")}
            alt="LinkedIn icon"/>
          <a href="https://www.linkedin.com/in/shanya-shrivastava/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contacts/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/shanyashrivastava">Github</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;