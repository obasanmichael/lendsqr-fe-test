// src/utils/iconMap.ts
// Centralized mapping of icon keys to imported SVG asset paths.

import DashboardIcon from "../assets/icons/dashboard.svg";
import UsersIcon from "../assets/icons/users.svg";
import GuarantorIcon from "../assets/icons/guarantors.svg";
import LoansIcon from "../assets/icons/loans.svg";
import DecisionModelIcon from "../assets/icons/decision.svg";
import SavingsIcon from "../assets/icons/savings1.svg";
import LoanReqIcon from "../assets/icons/loan.svg";
import WhiteListIcon from "../assets/icons/whitelist.svg";
import KarmaIcon from "../assets/icons/karma.svg";
import OrganizationIcon from "../assets/icons/organization_switch.svg";
import LoanProductIcon from "../assets/icons/loan.svg";
import SavingsProductIcon from "../assets/icons/savings.svg";
import FeesChargeIcon from "../assets/icons/fees&charge.svg";
import TransactionIcon from "../assets/icons/transactions.svg";
import ServiceIcon from "../assets/icons/services.svg";
import ServiceAccountIcon from "../assets/icons/service-account.svg";
import SettlementIcon from "../assets/icons/settlement.svg";
import ReportIcon from "../assets/icons/report.svg";
import PreferenceIcon from "../assets/icons/preferences.svg";
import FeesPricingIcon from "../assets/icons/fees-pricing.svg";
import AuditLogIcon from "../assets/icons/audit-logs.svg";

export const iconMap = {
  dashboard: DashboardIcon,
  users: UsersIcon,
  guarantors: GuarantorIcon,
  loans: LoansIcon,
  decision: DecisionModelIcon,
  savings: SavingsIcon,
  loanRequest: LoanReqIcon,
  whitelist: WhiteListIcon,
  karma: KarmaIcon,
  organization: OrganizationIcon,
  loanProduct: LoanProductIcon,
  savingsProduct: SavingsProductIcon,
  feesCharge: FeesChargeIcon,
  transactions: TransactionIcon,
  services: ServiceIcon,
  serviceAccount: ServiceAccountIcon,
  settlements: SettlementIcon,
  reports: ReportIcon,
  preferences: PreferenceIcon,
  feesPricing: FeesPricingIcon,
  auditLogs: AuditLogIcon,
} 

export type IconKey = keyof typeof iconMap;
