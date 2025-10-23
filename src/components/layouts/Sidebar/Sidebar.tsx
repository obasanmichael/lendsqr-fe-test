import { Link, NavLink, useNavigate } from "react-router-dom";
import { sidebarSections } from "../../../constants/sidebarItems";
import  {iconMap, type IconKey } from "../../../utils/iconMapper";
import styles from "./Sidebar.module.scss";
import dropdownIcon from "../../../assets/icons/dropdown.svg";
import logout from '../../../assets/icons/log-out.svg'
import logo from "../../../assets/logo.svg";
import useUserStore from "../../../store/userStore";
import toast from "react-hot-toast";
import { PanelLeftClose } from "lucide-react";

interface Props {
    onToggle?: () => void;
    onCloseMobile?: () => void;
}
const Sidebar = ({ onToggle, onCloseMobile }: Props) => {
    const clearUser = useUserStore(state => state.clearUser);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        clearUser();
        toast.success("Logged out successfully", { icon: "🚪" });
        navigate('/login');
    }
  return (
    <nav className={styles.sidebar} aria-label="Main Navigation">
      <div className={styles.logoSection}>
        <Link to={"/dashboard"}>
          <img src={logo} alt="Lendsqr" className={styles.logo} />
              </Link>
              <PanelLeftClose className={styles.collapse} onClick={onToggle} />
      </div>
      <div className={styles.orgSwitcher}>
        <img
          src={iconMap.organization}
          alt=""
          aria-hidden
          className={styles.orgIcon}
        />
        <span className={styles.switchText}>Switch Organization</span>
        <img src={dropdownIcon} className={styles.chev} />
      </div>

      <div className={styles.menu}>
        {sidebarSections.map((section, sIdx) => (
          <div className={styles.section} key={sIdx}>
            {section.title && (
              <p className={styles.sectionTitle}>{section.title}</p>
            )}
            <ul className={styles.sectionList}>
              {section.items.map((item) => {
                const iconSrc = iconMap[item.icon as IconKey];
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                      }
                      onClick={() => {
                        if (window.innerWidth <= 1024 && onCloseMobile) {
                          onCloseMobile(); 
                        }
                      }}
                    >
                      <img
                        src={iconSrc}
                        alt={`${item.label} icon`}
                        className={styles.icon}
                        aria-hidden
                      />
                      <span className={styles.label}>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className={styles.logoutSection}>
          <button onClick={handleLogout} className={styles.logoutButton}>
            <img className={styles.icon} src={logout} alt="Logout" />
            <span className={styles.logoutText}>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
