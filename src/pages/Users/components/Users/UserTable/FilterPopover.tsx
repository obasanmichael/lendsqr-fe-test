import React, { useRef, useEffect } from "react";
import styles from "./FilterPopover.module.scss";

interface FilterPopoverProps {
  column: string;
  onApply: (values: any) => void;
  onReset: () => void;
  onClose: () => void;
}

const FilterPopover: React.FC<FilterPopoverProps> = ({
  onApply,
  onReset,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const values = Object.fromEntries(formData.entries());
    onApply(values);
  };

  return (
    <div className={styles.filterPopover} ref={ref}>
      <form onSubmit={handleSubmit}>
        <label>
          Organization
          <input name="organization" placeholder="Select" />
        </label>
        <label>
          Username
          <input name="username" placeholder="User" />
        </label>
        <label>
          Email
          <input name="email" placeholder="Email" />
        </label>
        <label>
          Date
          <input type="date" name="date" />
        </label>
        <label>
          Phone Number
          <input name="phone" placeholder="Phone Number" />
        </label>
        <label>
          Status
          <select name="status">
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </label>
        <div className={styles.buttonRow}>
          <button type="button" onClick={onReset} className={styles.resetBtn}>
            Reset
          </button>
          <button type="submit" className={styles.filterBtn}>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterPopover;
