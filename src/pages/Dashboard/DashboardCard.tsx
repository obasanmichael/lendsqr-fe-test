import styles from "./Dashboard.module.scss";

type Metric = { label: string; value: string };

interface DashboardCardProps {
  title: string;
  value: string;
  metrics?: Metric[];
}

export const DashboardCard = ({
  title,
  value,
  metrics,
}: DashboardCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardValue}>{value}</p>
      </div>
      {metrics && (
        <ul className={styles.metrics}>
          {metrics.map((m, i) => (
            <li key={i}>
              <span>{m.label}</span>
              <span>{m.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
