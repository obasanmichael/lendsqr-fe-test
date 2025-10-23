import styles from "./Topbar.module.scss";
import SearchIcon from "../../../assets/icons/searchIcon.svg";
import BellIcon from "../../../assets/icons/bellIcon.svg";
import CaretIcon from "../../../assets/icons/caret-down.svg";
import Avatar from "../../../assets/avatar.png";
import { cn } from "../../../utils/cn";
import useUserStore from "../../../store/userStore";
import { MenuIcon } from "lucide-react";

interface Props {
  className?: string;
  onMenuClick: () => void;
}
const Topbar = ({ className, onMenuClick }: Props) => {
  const user = useUserStore(state => state.user)
  return (
    <header className={cn(styles.topbar, className)}>
      <div className={styles.searchWrapper}>
        <button
          className={styles.menuButton}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </button>
        <div
          className={styles.searchContainer}
          role="search"
          aria-label="Site search"
        >
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search for anything"
            aria-label="Search for anything"
          />

          <button className={styles.searchButton} aria-label="Search">
            <img src={SearchIcon} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <a href="#" className={styles.docsLink}>
          Docs
        </a>
        <button className={styles.iconButton} aria-label="Notifications">
          <img src={BellIcon} alt="notifications" />
        </button>
        <div className={styles.profile}>
          <img src={Avatar} alt="User avatar" className={styles.avatar} />
          <span className={styles.username}>{user?.name}</span>
          <img src={CaretIcon} alt="" className={styles.caret} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
