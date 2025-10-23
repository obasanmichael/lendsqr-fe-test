import styles from "./Dashboard.module.scss";
import { DashboardCard } from "./DashboardCard";

type Metric = { label: string; value: string };
type Card = { title: string; value: string; metrics?: Metric[] };

interface DashboardSectionProps {
  title: string;
  data: Card[];
}

export const DashboardSection = ({ title, data }: DashboardSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
        <span className={styles.sectionInfo}>ℹ️</span>
      </div>

      <div className={styles.cardsGrid}>
        {data.map((item, index) => (
          <DashboardCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
