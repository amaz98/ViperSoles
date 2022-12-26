import React from "react";
import LoginScreen from "./LoginScreen.js";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
};

export default App;
