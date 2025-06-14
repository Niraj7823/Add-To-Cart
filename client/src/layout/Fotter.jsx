import styles from "../css/Fotter.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTelegram,
} from "react-icons/fa6";

export const Fotter = () => {
  return (
    <footer
      className={styles.footer}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className={styles.container}>
        <div className={styles.linkColumn}>
          <a href="#">FAQ</a>
          <a href="#">Account</a>
          <a href="#">Investor Relation</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Privacy</a>
        </div>
        <div className={styles.linkColumn}>
          <a href="#">Broker Information</a>
          <a href="#">Speed Test</a>
          <a href="#">Only on Brokernest</a>
          <a href="#">Help Center</a>
          <a href="#">Media Center</a>
        </div>
        <div className={styles.linkColumn}>
          <a href="#">Localstorage Preferences</a>
          <a href="#">Contact Us</a>
          <a href="#">Legal Notices</a>
          <a href="#">Terms Of</a>
          <a href="#">Jobs</a>
        </div>
        <div className={styles.brandArea}>
          <div className={styles.logo}>
            <img src="/assets/logo.png" alt="Brokernest Logo" />
          </div>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/_niraj__0708/">
              {" "}
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/niraj-prajapati-327246319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedinIn />{" "}
            </a>
            <a href="https://github.com/Niraj7823">
              <FaGithub />
            </a>
            <a href="https://t.me/niraj_0708">
              {" "}
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomText}>© 2025 Brokernest Gujarat</div>
    </footer>
  );
};
