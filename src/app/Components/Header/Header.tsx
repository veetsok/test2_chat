import { DashOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./styled/header.module.css";
import ST from "../../page.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.ImageBox}>
        <div className={`${styles.Image} ${styles.borderYellow}`}>
          <img src="/img/1.jpg" alt="1" />
        </div>
        <div className={`${styles.Image} ${styles.borderPink}`}>
          <img src="/img/2.jpg" alt="1" />
        </div>
        <div className={`${styles.Image} ${styles.borderGray}`}>
          <img src="/img/3.jpg" alt="1" />
        </div>
        <div className={`${styles.Image} ${styles.borderBlack}`}>
          <img src="/img/4.jpg" alt="1" />
        </div>
      </div>
      <div>
        <h5>🦄 Team Unicorns</h5>
        <h6>last seen 45 minutes ago</h6>
      </div>
      <DashOutlined />
    </div>
  );
};
export default Header;
