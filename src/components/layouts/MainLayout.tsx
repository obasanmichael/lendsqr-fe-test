import type React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { useState } from "react";

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className={styles.layout}>
      <aside
        className={`${styles.sidebar} ${
          sidebarOpen ? styles.open : styles.collapsed
        }`}
      >
        <Sidebar onToggle={() => setSidebarOpen(!sidebarOpen)} />
      </aside>
      <div className={styles.mainContent}>
        <Topbar className={styles.topbar} />
        <main className={styles.outlet}>{children ?? <Outlet />}</main>
      </div>
    </div>
  );
};

export default MainLayout;
