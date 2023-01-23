import React, { useState, useCallback, useEffect, useContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./LoginScreen.js";
import Home from "./Home";
import AppStack from "./AppStack.js";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import NavigateStack from "./app.navigator.js";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AuthProvider,
  ContextCredentials,
} from "./components/ContextCredentials.js";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppStack />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
