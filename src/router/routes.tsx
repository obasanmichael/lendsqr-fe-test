import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import MainLayout from "../components/layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import UserDetails from "../pages/UserDetails/UserDetails";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true,  element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "users/:id", element: <UserDetails /> },
    ],
  },
]);
