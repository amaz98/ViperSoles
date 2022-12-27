import React, { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./LoginScreen.js";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";

const App = () => {
  /* let [fontsLoaded] = useFonts({
    "PTSansNarrow-Regular": require("./fonts/PTSansNarrow-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }*/

  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
};

export default App;
