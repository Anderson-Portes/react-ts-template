import { RouteObject } from "react-router-dom";
import Index from "../pages/Index";

const authRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Index />
  }
];
export default authRoutes;