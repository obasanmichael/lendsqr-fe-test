import React from "react";
import styles from "../pages/Styles.module.scss";
import RestrictedImage from "../assets/access-restricted.png"; // replace path

const AccessRestricted: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        src={RestrictedImage}
        alt="Access Restricted Illustration"
        className={styles.image}
      />
      <h2 className={styles.title}>Access Restricted</h2>
      <p className={styles.text}>
        You cannot access this page on your current plan. Kindly upgrade your
        plan or contact support for more info.
      </p>
      <button className={styles.button}>Upgrade Plan</button>
    </div>
  );
};

export default AccessRestricted;
