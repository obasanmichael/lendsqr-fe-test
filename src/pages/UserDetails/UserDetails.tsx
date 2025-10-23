import { useNavigate, useParams } from "react-router-dom";
import styles from "./UserDetails.module.scss";
import BackIcon from "../../assets/icons/np_back.svg"; 
import { UserDetailsTabs } from "./components/UserDetailsTabs";

import useUsersStore from "../../store/useUsersStore";

export default function UserDetail() {
  const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { selectedUser } = useUsersStore();

      if (!selectedUser || selectedUser.id !== Number(id)) {
        setTimeout(() => navigate("/users"), 1500);
        return (
          <div className={styles.userDetails}>
            <p>No user selected. Redirecting...</p>
          </div>
        );
      }
    const user = selectedUser;


  return (
    <div className={styles.userDetail}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <img src={BackIcon} alt="Back" />
        <span>Back to Users</span>
      </button>
      <div className={styles.header}>
        <div className={styles.headerRight}>
          <h1>User Details</h1>

          <div className={styles.actions}>
            <button className={`${styles.btn} ${styles.blacklist}`}>
              BLACKLIST USER
            </button>
            <button className={`${styles.btn} ${styles.activate}`}>
              ACTIVATE USER
            </button>
          </div>
        </div>
      </div>
      <div className={styles.userDetailsContainer}>
        <UserDetailsTabs user={user} />
      </div>
    </div>
  );
}

