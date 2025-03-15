import React from "react";
import styles from "./Footer.module.css";
import mail from "../../assets/email.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.logo}>
        <div>
          SEVİKO.<span>AZ</span>
        </div>
        <div className={styles.contacts}>
          <p>
            <img className={styles.icon} src={mail} alt="" />
            ravan.akhundov@gmail.com
          </p>
        </div>
            </div>
    </footer>
  );
};

export default Footer;
