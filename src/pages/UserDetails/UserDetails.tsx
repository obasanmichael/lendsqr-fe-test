import { useNavigate } from "react-router-dom";
import styles from "./UserDetails.module.scss";
import BackIcon from "../../assets/icons/np_back.svg"; // replace with your arrow icon
import { UserDetailsTabs } from "./components/UserDetailsTabs";

export default function UserDetail() {
  const navigate = useNavigate();

      const user = {
        id: "USR-001",
        name: "Grace Effiom",
        username: "gracee",
        email: "gracee@gmail.com",
        phone: "08012345678",
        organization: "Lendsqr",
        dateJoined: "May 15, 2020",
        status: "Active",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        tier: 2,
        accountBalance: "₦400,000.00",
        accountNumber: "1234567890 / Providus Bank",
        personalInfo: {
          fullName: "Grace Effiom",
          gender: "Female",
          maritalStatus: "Single",
          children: "None",
          residence: "Lekki, Lagos",
        },
        education: {
          level: "B.Sc",
          employmentStatus: "Employed",
          sector: "Finance",
          duration: "2 years",
          officeEmail: "grace.effiom@lendsqr.com",
          income: "₦200,000 - ₦500,000",
          loanRepayment: "₦40,000/month",
        },
        socials: {
          twitter: "@gracee",
          facebook: "facebook.com/gracee",
          instagram: "@gracee",
        },
        guarantor: {
          fullName: "Tunde Effiom",
          phone: "08098765432",
          email: "tunde.effiom@gmail.com",
          relationship: "Brother",
        },
      };

  return (
    <div className={styles.userDetail}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <img src={BackIcon} alt="Back" />
        <span>Back to Users</span>
      </button>
      <div className={styles.header}>
        <div className={styles.headerRight}>
          <h1>User Details</h1>

          <div className={styles.actions}>
            <button className={`${styles.btn} ${styles.blacklist}`}>
              BLACKLIST USER
            </button>
            <button className={`${styles.btn} ${styles.activate}`}>
              ACTIVATE USER
            </button>
          </div>
        </div>
      </div>
      <div className={styles.userDetailsContainer}>
              <UserDetailsTabs user={user} />
      </div>
    </div>
  );
}

          {
            /* <UserProfileCard
            name="Grace Effiom"
            uniqueId="LSQFf587g90"
            tier={1}
            balance="₦200,000.00"
            bankDetails="Providus Bank / 1234567890"
              /> */
          }
