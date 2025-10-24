import React from "react";
import styles from "./UserTable.module.scss";
import Skeleton from "react-loading-skeleton";


const UserTableSkeleton: React.FC = () => {

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {[
              "Organization",
              "Username",
              "Email",
              "Phone Number",
              "Date Joined",
              "Status",
            ].map((header) => (
              <th key={header}>
                <div className={styles.thContent}>
                  <Skeleton width={100} height={14} />
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 8 }).map((_, idx) => (
            <tr key={idx}>
              {Array.from({ length: 6 }).map((__, colIdx) => (
                <td key={colIdx}>
                  <Skeleton height={16} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTableSkeleton;
