import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import BaseLayout from "../layouts/BaseLayout";

const Guest = (): JSX.Element  => {
  const { user } = useAuth();
  return user ? <Navigate to="/"  /> : <BaseLayout />;
}

export default Guest;