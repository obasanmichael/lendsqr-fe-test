import React, { useMemo, useState } from "react";
import styles from "./UserTable.module.scss";
import StatusBadge from "../../ui/StatusBadge/StatusBadge";
import ActionMenu from "./ActionMenu/ActionMenu";
import FilterIcon from "../../../../../assets/icons/filter-button.svg";
// import users from '../../../../../data/users.json';
import { useUsers } from "../../../../../hooks/useUsers";
import useUsersStore from "../../../../../store/useUsersStore";
import Pagination from "../Pagination";
import FilterPopover from "./FilterPopover";

const UserTable: React.FC = () => {
  const { data: users, isLoading, isError } = useUsers();
  const { currentPage, setCurrentPage, filters, setFilters, resetFilters } =
    useUsersStore();
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const handleFilterClick = (column: string) => {
    setOpenFilter((prev) => (prev === column ? null : column));
  };

  const handleApplyFilter = (values: any) => {
    setFilters(values); // saves globally via Zustand
    setOpenFilter(null);
  };

  const handleResetFilter = () => {
    resetFilters();
    setOpenFilter(null);
    setCurrentPage(1);
    setOpenFilter(null);
  }; // column key

  const filteredUsers = useMemo(() => {
    let result = users ?? [];
    if (filters.organization)
      result = result.filter((u) =>
        u.organization
          .toLowerCase()
          .includes(filters.organization!.toLowerCase())
      );
    if (filters.username)
      result = result.filter((u) =>
        u.username.toLowerCase().includes(filters.username!.toLowerCase())
      );
    if (filters.email)
      result = result.filter((u) =>
        u.email.toLowerCase().includes(filters.email!.toLowerCase())
      );
    if (filters.status)
      result = result.filter((u) => u.status === filters.status);
    return result;
  }, [users, filters]);

  const PAGE_SIZE = 10;

  if (isLoading)
    return <div className={styles.loadingDiv}>Loading users...</div>;
  if (isError)
    return <div className={styles.failedDiv}>Failed to load users.</div>;

  // const typedUsers = (users ?? []).filter((u) =>
  //   u.username.toLowerCase().includes(search.toLowerCase())
  // );
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedUsers = filteredUsers.slice(start, start + PAGE_SIZE);
  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);

  return (
    <div className={styles.tableSection}>
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
                      onClick={() => handleFilterClick(header)}
                    >
                      <img src={FilterIcon} alt="" />
                    </button>
                    {openFilter === header && (
                      <FilterPopover
                        column={header}
                        onApply={handleApplyFilter}
                        onReset={handleResetFilter}
                        onClose={() => setOpenFilter(null)}
                      />
                    )}
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((user, idx) => (
              <tr key={idx} style={{ cursor: "pointer" }}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.date}</td>
                <td>
                  <StatusBadge status={user.status as any} />
                </td>
                <td>
                  <ActionMenu user={user} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.paginationSection}>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default UserTable;
