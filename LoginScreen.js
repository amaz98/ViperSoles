import React from "react";
import {
  StyledContainer,
  InnerContainer,
  Logo,
  LoginTitle,
  FormBox,
  LoginTextInput,
  LoginButton,
  LoginButtonText,
  LoginInputLabel,
  LoginInputIcon,
  TextEyeHideIcon,
} from "./styles";
import { Image, View } from "react-native";
import { Text, Box, Heading, Center, VStack, Input } from "native-base";
import logo from "./assets/adaptive-icon1.png";
import { useFonts } from "expo-font";
import { Formik } from "formik";
import { Octicons } from "@expo/vector-icons";

function LoginScreen() {
  const [loaded] = useFonts({
    PTSansNarrowReg: require("./assets/fonts/PTSansNarrow-Regular.ttf"),
    PTSansNarrowBold: require("./assets/fonts/PTSansNarrow-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <StyledContainer>
      <InnerContainer>
        <Logo source={logo} />
        <LoginTitle style={{ fontFamily: "PTSansNarrowBold" }}>
          Account Login
        </LoginTitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <FormBox>
              <InputText
                label="Email Address"
                icon="mail"
                placeholder="Enter Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyBoardType="email-address"
              />
              <InputText
                label="Password"
                icon="lock"
                placeholder="Enter Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </FormBox>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const InputText = ({ label, icon, ...props }) => {
  return (
    <View>
      <LoginInputLabel>{label}</LoginInputLabel>
      <LoginTextInput {...props} />
      <LoginInputIcon>
        <Octicons name={icon} size={30} />
      </LoginInputIcon>
    </View>
  );
};

export default LoginScreen;
