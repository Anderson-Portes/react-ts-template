import {
  createBrowserRouter,
} from "react-router-dom";
import Auth from "../middlewares/Auth";
import Guest from "../middlewares/Guest";
import PageNoutFound from "../pages/errors/PageNotFound"
import authRoutes from "./auth.routes";
import guestRoutes from "./guest.routes";

const router = createBrowserRouter([
  {
    element: <Auth/>,
    errorElement: <PageNoutFound />,
    children: authRoutes
  },
  {
    element: <Guest/>,
    errorElement: <PageNoutFound />,
    children: guestRoutes
  }
]);
export default router;