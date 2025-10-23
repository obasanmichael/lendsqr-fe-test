import type React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { useState } from "react";

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <aside
        className={`
        ${styles.sidebar} 
        ${isSidebarCollapsed ? styles.collapsed : ""} 
        ${isMobileSidebarOpen ? styles.mobileOpen : ""}
      `}
      >
        <Sidebar onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      </aside>
      {isMobileSidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
      <div className={styles.mainContent}>
        <Topbar
          className={styles.topbar}
          onMenuClick={() => setIsMobileSidebarOpen(true)}
        />
        <main className={styles.outlet}>{children ?? <Outlet />}</main>
      </div>
    </div>
  );
};

export default MainLayout;
