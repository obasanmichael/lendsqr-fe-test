import type { User } from "../../../types/types"
import styles from './BankDetails.module.scss'

interface BankDetailsProps{
    user: User;
}
const BankDetails = ({user} : BankDetailsProps) => {
  return (
    <div className={styles.bankDetails}>
          <h3 className={styles.sectionTitle}>Bank Details</h3>
          <p>
              <span>Bank:</span>
              <span>{' '}{ user.profile.bank}</span>
          </p>
          <p>
              <span>Account Number:</span>
              <span>{' '}{ user.profile.acctNo}</span>
          </p>
    </div>
  );
}

export default BankDetails