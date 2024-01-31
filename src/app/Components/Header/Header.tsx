import { DashOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./styled/header.module.css";
import ST from "../../page.module.css";
import Image from "next/image";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.ImageBox}>
        <div className={`${styles.Image} ${styles.borderYellow}`}>
          <Image src="/img/1.jpg" alt="1" width={100} height={100} />
        </div>
        <div className={`${styles.Image} ${styles.borderPink}`}>
          <Image src="/img/2.jpg" alt="2" width={100} height={100} />
        </div>
        <div className={`${styles.Image} ${styles.borderGray}`}>
          <Image src="/img/3.jpg" alt="3" width={100} height={100} />
        </div>
        <div className={`${styles.Image} ${styles.borderBlack}`}>
          <Image src="/img/4.jpg" alt="4" width={100} height={100} />
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
