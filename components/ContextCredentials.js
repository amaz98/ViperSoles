import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextCredentials = createContext({});

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userFirstName, setUserFirstName] = useState("");

  const signUp = async (firstName) => {
    setUserFirstName(firstName);
    const firstname = JSON.stringify(firstName);
    console.log("AsynStorage, setting user's first name as " + firstname);
    await AsyncStorage.setItem("userFirstName", firstname);
    setUserToken("userToken");
    await AsyncStorage.setItem("userToken", "userToken");
  };

  const login = async () => {
    setUserToken("userToken");
    await AsyncStorage.setItem("userToken", "userToken");
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userFirstName");
    setUserToken(null);
    setUserFirstName("");
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
      value={{ isLoggedIn, signUp, login, logout, userToken, setUserToken }}
    >
      {children}
    </ContextCredentials.Provider>
  );
};
