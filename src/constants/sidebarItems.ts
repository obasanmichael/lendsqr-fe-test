import type { IconKey } from "../utils/iconMapper";

// src/constants/sidebarItems.ts
export type SidebarItem = {
  label: string;
  path: string;
  icon: IconKey;
};

export type SidebarSection = {
  title?: string;
  items: SidebarItem[];
};

export const sidebarSections: SidebarSection[] = [
  {
    items: [{ label: "Dashboard", icon: "dashboard", path: "/dashboard" }],
  },
  {
    title: "Customers",
    items: [
      { label: "Users", path: "/users", icon: "users" },
      { label: "Guarantors", path: "/guarantors", icon: "guarantors" }, // replace with correct icon if you have
      { label: "Loans", path: "/loans", icon: "loans" },
      { label: "Decision Models", path: "/decision-models", icon: "decision" },
      { label: "Savings", path: "/savings", icon: "savings" },
      { label: "Loan Requests", path: "/loan-requests", icon: "loanRequest" },
      { label: "Whitelist", path: "/whitelist", icon: "whitelist" },
      { label: "Karma", path: "/karma", icon: "karma" },
    ],
  },
  {
    title: "Businesses",
    items: [
      { label: "Organization", path: "/organization", icon: "organization" },
      { label: "Loan Products", path: "/loan-products", icon: "loanProduct" },
      {
        label: "Savings Products",
        path: "/savings-products",
        icon: "savingsProduct",
      },
      { label: "Fees and Charges", path: "/fees-charges", icon: "feesCharge" },
      { label: "Transactions", path: "/transactions", icon: "transactions" },
      { label: "Services", path: "/services", icon: "services" },
      {
        label: "Service Account",
        path: "/service-account",
        icon: "serviceAccount",
      },
      { label: "Settlements", path: "/settlements", icon: "settlements" },
      { label: "Reports", path: "/reports", icon: "reports" },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Preferences", path: "/preferences", icon: "preferences" },
      { label: "Fees and Pricing", path: "/fees-pricing", icon: "feesPricing" },
      { label: "Audit Logs", path: "/audit-logs", icon: "auditLogs" },
    ],
  },
];
