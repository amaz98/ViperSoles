import React, { useState, useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./LoginScreen.js";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import NavigateStack from "./app.navigator.js";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Credentials } from "./components/Credentials";
import {
  AuthProvider,
  ContextCredentials,
} from "./components/ContextCredentials.js";

const App = () => {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <NavigateStack />
      </NativeBaseProvider>
    </AuthProvider>
  );
};

export default App;
