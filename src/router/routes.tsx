import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import MainLayout from "../components/layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import UserDetails from "../pages/UserDetails/UserDetails";
import DecisionModels from "../pages/DecisionModels";
import Guarantors from "../pages/Guarantors";
import LoanRequest from "../pages/LoanRequest";
import Loans from "../pages/Loans";
import WhiteList from "../pages/WhiteList";
import Savings from "../pages/Savings";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {  path: 'dashboard', element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "users/:id", element: <UserDetails /> },
      { path: "decision-models", element: <DecisionModels /> },
      { path: "guarantors", element: <Guarantors /> },
      { path: "loan-requests", element: <LoanRequest /> },
      { path: "loans", element: <Loans /> },
      { path: "loan-products", element: <Loans /> },
      { path: "whitelist", element: <WhiteList /> },
      { path: "savings", element: <Savings /> },
      { path: "organization", element: <Savings /> },
      { path: "karma", element: <Savings /> },
      { path: "savings-products", element: <Savings /> },
      { path: "fees-charges", element: <Savings /> },
      { path: "transactions", element: <Savings /> },
      { path: "services", element: <Savings /> },
      { path: "settlements", element: <Savings /> },
      { path: "reports", element: <Savings /> },
      { path: "preferences", element: <Savings /> },
      { path: "fees-pricing", element: <Savings /> },
      { path: "audit-logs", element: <Savings /> },
      { path: "service-account", element: <Savings /> },

    ],
  },
]);
