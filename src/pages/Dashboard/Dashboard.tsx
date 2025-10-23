import styles from "./Dashboard.module.scss";
import { DashboardSection } from "./DashboardSection";
import { customerData, loanData, savingsData } from "../../constants/constants";


 const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Performance Insights Dashboard</p>
        </div>

      </div>
      <DashboardSection title="Loan Performance" data={loanData} />
      <DashboardSection title="Customer Information" data={customerData} />
      <DashboardSection title="Savings Performance" data={savingsData} />
    </div>
  );
 };

export default Dashboard;
