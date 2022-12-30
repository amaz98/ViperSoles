import { createContext } from "react";

export const ContextCredentials = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const login = () => {};

  const logout = () => {};

  return <ContextCredentials.Provider>{children}</ContextCredentials.Provider>;
};
