import { RouteObject } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const guestRoutes: RouteObject[] = [
  {
    path: "/auth/login",
    element: <Login />
  },
  {
    path: "/auth/register",
    element: <Register />
  }
];
export default guestRoutes;