import React from "react";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onChange,
}) => {
  if (totalPages <= 1) return null;

  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onChange(page);
  };

  // Show at most 5 pages at once
  const getVisiblePages = () => {
    const maxVisible = 5;
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisible - 1);

    // Adjust if we’re near the end
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navBtn}
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        ‹
      </button>

      {visiblePages[0] > 1 && (
        <>
          <button className={styles.pageBtn} onClick={() => handleClick(1)}>
            1
          </button>
          {visiblePages[0] > 2 && <span className={styles.ellipsis}>…</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={`${styles.pageBtn} ${
            page === currentPage ? styles.active : ""
          }`}
        >
          {page}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className={styles.ellipsis}>…</span>
          )}
          <button
            className={styles.pageBtn}
            onClick={() => handleClick(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className={styles.navBtn}
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
