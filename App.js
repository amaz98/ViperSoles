import React, { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./LoginScreen.js";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import NavigateStack from "./app.navigator.js";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigateStack />
    </NativeBaseProvider>
  );
};

export default App;
