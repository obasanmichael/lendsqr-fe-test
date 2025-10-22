import React from "react";
import styles from "./StatusBadge.module.scss";

interface StatusBadgeProps {
  status: "Active" | "Pending" | "Blacklisted" | "Inactive";
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`${styles.badge} ${styles[status.toLowerCase()]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
