import React from "react";
import styles from "./UserStatsCard.module.scss";

interface UserStatsCardProps {
  icon: string;
  title: string;
  count: string;
}

const UserStatsCard: React.FC<UserStatsCardProps> = ({
  icon,
  title,
  count,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={title} />
      </div>
      <p className={styles.title}>{title}</p>
      <h3 className={styles.count}>{count}</h3>
    </div>
  );
};

export default UserStatsCard;
