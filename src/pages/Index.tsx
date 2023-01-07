import { useAuth } from "../contexts/AuthContext";

const Index = (): JSX.Element => {
  const { user } = useAuth();
  return (
    <h1>Welcome {user?.name}</h1>
  );
}

export default Index;