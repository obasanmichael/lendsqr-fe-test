import React from "react";
import styles from "./UserProfileCard.module.scss";
import StarFilled from "../../../assets/icons/star-filled.svg";
import StarOutline from "../../../assets/icons/star-unfilled.svg";
import DefaultAvatar from "../../../assets/icons/userProfile.svg";

interface UserProfileCardProps {
  name: string;
  uniqueId: string;
  tier: number; //for the user
  balance: string;
  bankDetails: string;
  avatar?: string;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  uniqueId,
  tier,
  balance,
  bankDetails,
  avatar,
}) => {
  const stars = [1, 2, 3];

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.avatarContainer}>
          <img
            src={avatar || DefaultAvatar}
            alt={`${name} avatar`}
            className={styles.avatar}
          />
        </div>
        <div className={styles.userInfo}>
          <h2>{name}</h2>
          <p>{uniqueId}</p>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.middle}>
        <p>User’s Tier</p>
        <div className={styles.stars}>
          {stars.map((star) => (
            <img
              key={star}
              src={star <= tier ? StarFilled : StarOutline}
              alt=""
              className={styles.star}
            />
          ))}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.right}>
        <h3>{balance}</h3>
        <p>{bankDetails}</p>
      </div>
    </div>
  );
};
