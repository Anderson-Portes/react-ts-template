import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import BaseLayout from "../layouts/BaseLayout";

const Auth = () : JSX.Element  => {
  const { user } = useAuth();
  return user ? <BaseLayout /> : <Navigate to="/auth/login"  />;
}

export default Auth;