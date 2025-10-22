import React, { useState } from "react";
import styles from "./UserDetailsTabs.module.scss";
import GeneralDetails from "./GeneralDetails";
import { UserProfileCard } from "./UserProfileCard";

const TAB_LIST = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

interface UserDetailsTabsProps {
  user: any;
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
          name="Grace Effiom"
          uniqueId="LSQFf587g90"
          tier={1}
          balance="₦200,000.00"
          bankDetails="Providus Bank / 1234567890"
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
