import React, { useEffect, useState } from "react";
import { constraints } from "../bootstrap/constraints";
import { User } from "../types/User";

export interface AuthContextInterface {
  user: User | null;
  setUser: (user: User) => void;
}

export const AuthContext = React.createContext<AuthContextInterface>({} as AuthContextInterface);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User>(null);
  useEffect(() => {
    const userStorage = localStorage.getItem(constraints.userKey);
    userStorage && setUser(JSON.parse(userStorage) as User);
  },[]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextInterface =>  React.useContext(AuthContext);