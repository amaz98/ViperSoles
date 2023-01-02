import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextCredentials = createContext({});

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setUserToken("userToken");
    AsyncStorage.setItem("userToken", "userToken");
  };

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
  };

  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      if (userToken != null) {
        setUserToken(userToken);
      }
    } catch (e) {
      console.log(`isLoggedIn ERROR ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <ContextCredentials.Provider
      value={{ isLoggedIn, login, logout, userToken }}
    >
      {children}
    </ContextCredentials.Provider>
  );
};
