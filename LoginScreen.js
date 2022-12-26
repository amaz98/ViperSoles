import React from "react";
import { StyledContainer, InnerContainer, Logo, LoginTitle } from "./styles";
import { Image } from "react-native";
import { Text, Box, Heading, Center, VStack } from "native-base";
import logo from "./assets/adaptive-icon1.png";
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function LoginScreen() {
  let [fontsLoaded] = useFonts({
    "PTSansNarrow-Regular": require("./fonts/PtSansNarrow-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <StyledContainer style={{ fontFamily: "PTSansNarrow-Regular" }}>
      <InnerContainer>
        <Logo source={logo} />
        <LoginTitle>Login to your Viper Soles Account</LoginTitle>
      </InnerContainer>
    </StyledContainer>
  );
}

export default LoginScreen;
