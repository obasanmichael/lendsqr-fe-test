export interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  profile: {
    name: string;
    uniqueId: string;
    tier: number;
    balance: string;
    bank: string;
    acctNo: string;
  };
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    bvn: number;
    gender: string;
    maritalStatus: string;
    children: string;
    residence: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    income: string;
    loanRepayment: string;
  };
  socials: { twitter: string; facebook: string; instagram: string };
  guarantor: {
    fullName: string;
    phone: string;
    email: string;
    relationship: string;
  };
}
