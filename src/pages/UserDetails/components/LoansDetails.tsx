import type { User } from "../../../types/types";
import styles from './LoansDetails.module.scss';

interface Props{
    user: User;
}
const LoansDetails = ({ user } : Props) => {
  return (
    <div className={styles.loanDetails}>
      <h3 className={styles.sectionTitle}>Loan Repayment</h3>
      <p>Loans:<span>{' '}{user.education.loanRepayment }</span></p>
    </div>
  );
}

export default LoansDetails