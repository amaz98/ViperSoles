import React, { useState, useCallback, useEffect, useContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./LoginScreen.js";
import Home from "./Home";
import UserPage from "./UserPage.js";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import NavigateStack from "./app.navigator.js";
import NavigateStack2 from "./app2.navigator.js";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AuthProvider,
  ContextCredentials,
} from "./components/ContextCredentials.js";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function AppStack() {
  const { userToken, setUserToken } = useContext(ContextCredentials);

  return (
    <NativeBaseProvider>
      {userToken != null ? <NavigateStack2 /> : <NavigateStack />}
    </NativeBaseProvider>
  );
}

export default AppStack;
