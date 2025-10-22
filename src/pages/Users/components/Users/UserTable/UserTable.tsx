import React from "react";
import styles from "./UserTable.module.scss";
import { mockUsers } from "../../../../../constants/mockUsers";
import StatusBadge from "../../ui/StatusBadge/StatusBadge";
import ActionMenu from "./ActionMenu/ActionMenu";
import FilterIcon from '../../../../../assets/icons/filter-button.svg';
// import { useNavigate } from "react-router-dom";


const UserTable: React.FC = () => {
    // const navigate = useNavigate();
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
                  <span>{header}</span>
                  <button
                    type="button"
                    className={styles.filterButton}
                    aria-label={`Filter by ${header}`}
                  >
                    <img src={FilterIcon} alt="" />
                  </button>
                </div>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {mockUsers.map((user, idx) => (
            <tr
              key={idx}
            //   onClick={() => navigate(`/users/${user.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.date}</td>
              <td>
                <StatusBadge status={user.status as any} />
              </td>
              <td>
                <ActionMenu userId={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
