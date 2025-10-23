import { stats } from "../../constants/constants";
import UserStatsCard from "./components/Users/UserStatsCard/UserStatsCard";
import UserTable from "./components/Users/UserTable/UserTable";
import styles from "./Users.module.scss";

const Users = () => {
  return (
    <div className={styles.usersPage}>
      <div className={styles.header}>
        <h1>Users</h1>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((item) => (
          <UserStatsCard key={item.id} {...item} />
        ))}
          </div>
          
      <div className={styles.tableSection}>
        <UserTable />
      </div>
    </div>
  );
};

export default Users;
