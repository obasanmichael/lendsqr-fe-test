import React from "react";
import styles from "./GeneralDetails.module.scss";
import type { User } from "../../../types/types";


interface GeneralDetailsProps {
  user: User;
}

export const GeneralDetails: React.FC<GeneralDetailsProps> = ({ user }) => {
  return (
    <div className={styles.generalDetails}>
      {/* PERSONAL INFORMATION */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Personal Information</h3>
        <div className={styles.infoGrid}>
          <div>
            <p className={styles.label}>Full Name</p>
            <p className={styles.value}>{user.personalInfo.fullName}</p>
          </div>
          <div>
            <p className={styles.label}>Phone Number</p>
            <p className={styles.value}>{user.personalInfo.phone}</p>
          </div>
          <div>
            <p className={styles.label}>Email Address</p>
            <p className={styles.value}>{user.personalInfo.email}</p>
          </div>
          <div>
            <p className={styles.label}>bvn</p>
            <p className={styles.value}>{user.personalInfo.bvn}</p>
          </div>
          <div>
            <p className={styles.label}>Gender</p>
            <p className={styles.value}>{user.personalInfo.gender}</p>
          </div>
          <div>
            <p className={styles.label}>Marital Status</p>
            <p className={styles.value}>{user.personalInfo.maritalStatus}</p>
          </div>
          <div>
            <p className={styles.label}>Children</p>
            <p className={styles.value}>{user.personalInfo.children}</p>
          </div>
          <div>
            <p className={styles.label}>Type of Residence</p>
            <p className={styles.value}>{user.personalInfo.residence}</p>
          </div>
        </div>
      </section>

      {/* EDUCATION & EMPLOYMENT */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Education and Employment</h3>
        <div className={styles.infoGrid}>
          <div>
            <p className={styles.label}>Level of Education</p>
            <p className={styles.value}>{user.education.level}</p>
          </div>
          <div>
            <p className={styles.label}>Employment Status</p>
            <p className={styles.value}>{user.education.employmentStatus}</p>
          </div>
          <div>
            <p className={styles.label}>Sector of Employment</p>
            <p className={styles.value}>{user.education.sector}</p>
          </div>
          <div>
            <p className={styles.label}>Duration of Employment</p>
            <p className={styles.value}>{user.education.duration}</p>
          </div>
          <div>
            <p className={styles.label}>Office Email</p>
            <p className={styles.value}>{user.education.officeEmail}</p>
          </div>
          <div>
            <p className={styles.label}>Monthly Income</p>
            <p className={styles.value}>{user.education.income}</p>
          </div>
          <div>
            <p className={styles.label}>Loan Repayment</p>
            <p className={styles.value}>{user.education.loanRepayment}</p>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Socials</h3>
        <div className={styles.infoGrid}>
          <div>
            <p className={styles.label}>Twitter</p>
            <p className={styles.value}>{user.socials.twitter}</p>
          </div>
          <div>
            <p className={styles.label}>Facebook</p>
            <p className={styles.value}>{user.socials.facebook}</p>
          </div>
          <div>
            <p className={styles.label}>Instagram</p>
            <p className={styles.value}>{user.socials.instagram}</p>
          </div>
        </div>
      </section>

      {/* GUARANTOR */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Guarantor</h3>
        <div className={styles.infoGrid}>
          <div>
            <p className={styles.label}>Full Name</p>
            <p className={styles.value}>{user.guarantor.fullName}</p>
          </div>
          <div>
            <p className={styles.label}>Phone Number</p>
            <p className={styles.value}>{user.guarantor.phone}</p>
          </div>
          <div>
            <p className={styles.label}>Email Address</p>
            <p className={styles.value}>{user.guarantor.email}</p>
          </div>
          <div>
            <p className={styles.label}>Relationship</p>
            <p className={styles.value}>{user.guarantor.relationship}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
