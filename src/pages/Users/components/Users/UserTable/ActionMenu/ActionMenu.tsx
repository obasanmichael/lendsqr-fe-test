import { useEffect, useRef, useState } from 'react';
import DotIcon from '../../../../../../assets/icons/dots-icon.svg';
import styles from './ActionMenu.module.scss';
import ViewIcon from '../../../../../../assets/icons/view-details.svg';
import BlacklistIcon from '../../../../../../assets/icons/blacklist-user.svg';
import ActivateIcon from '../../../../../../assets/icons/activate-user.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
    onViewDetails?: () => void;
    onBlacklist?: () => void;
    onActivate?: () => void;
    userId?: number;
}

const ActionMenu = ({ userId, onBlacklist, onActivate }: Props) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
      <div className={styles.menuWrapper} ref={menuRef}>
        <button className={styles.iconBtn} onClick={() => setOpen(!open)}>
          <img src={DotIcon} alt="" />
        </button>
        {open && (
          <div className={styles.dropdown}>
            <button
              onClick={() => navigate(`/users/${userId}`)}
              className={styles.dropdownItem}
            >
              <img src={ViewIcon} alt="" />
              <span>View Details</span>
            </button>
            <button onClick={onBlacklist} className={styles.dropdownItem}>
              <img src={BlacklistIcon} alt="" />
              <span>Blacklist User</span>
            </button>
            <button onClick={onActivate} className={styles.dropdownItem}>
              <img src={ActivateIcon} alt="" />
              <span>Activate User</span>
            </button>
          </div>
        )}
      </div>
    );
}

export default ActionMenu;