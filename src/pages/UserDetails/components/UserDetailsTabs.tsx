import React, { useState } from "react";
import styles from "./UserDetailsTabs.module.scss";
import { UserProfileCard } from "./UserProfileCard";
import { GeneralDetails } from "./GeneralDetails";
import type { User } from "../../../types/types";

const TAB_LIST = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

interface UserDetailsTabsProps {
  user: User;
}

export const UserDetailsTabs: React.FC<UserDetailsTabsProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState("General Details");

  const renderTabContent = () => {
    switch (activeTab) {
      case "General Details":
        return <GeneralDetails user={user} />;
      default:
        return <div className={styles.emptyState}>No data available yet.</div>;
    }
  };

  return (
    <>
      <div className={styles.profileTabs}>
        <UserProfileCard
user={user}
        />
        <div className={styles.tabHeaders}>
          {TAB_LIST.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tabContent}>{renderTabContent()}</div>
    </>
  );
};
