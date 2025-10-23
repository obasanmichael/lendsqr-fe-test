import React from "react";
import styles from "./UserProfileCard.module.scss";
import StarFilled from "../../../assets/icons/star-filled.svg";
import StarOutline from "../../../assets/icons/star-unfilled.svg";
import DefaultAvatar from "../../../assets/icons/userProfile.svg";
import type { User } from "../../../types/types";

interface UserProfileCardProps {
    avatar?: string;
    user: User;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
avatar,
  user,
}) => {
  const stars = [1, 2, 3];

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.avatarContainer}>
          <img
            src={avatar || DefaultAvatar}
            alt={`${user.profile.name} avatar`}
            className={styles.avatar}
          />
        </div>
        <div className={styles.userInfo}>
          <h2>{user.profile.name}</h2>
          <p>{user.profile.uniqueId}</p>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.middle}>
        <p>User’s Tier</p>
        <div className={styles.stars}>
          {stars.map((star) => (
            <img
              key={star}
              src={star <= user.profile.tier ? StarFilled : StarOutline}
              alt=""
              className={styles.star}
            />
          ))}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.right}>
        <h3>{user.profile.balance}</h3>
        <p>
                  <span>{user.profile.bank} / </span>
                  <span>{user.profile.acctNo }</span>
                  
        </p>
      </div>
    </div>
  );
};
