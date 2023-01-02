import React, { useState, useCallback, useEffect, useContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./LoginScreen.js";
import Home from "./Home";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import NavigateStack from "./app.navigator.js";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AuthProvider,
  ContextCredentials,
} from "./components/ContextCredentials.js";

function AppStack() {
  const { userToken, isLoggedIn } = useContext(ContextCredentials);
  console.log(userToken);

  return (
    <NativeBaseProvider>
      {userToken != null ? <Home /> : <NavigateStack />}
    </NativeBaseProvider>
  );
}

export default AppStack;
