import React, { useState } from "react";
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
  EmailError,
} from "./styles";
import { Image, View, TouchableOpacity, Linking } from "react-native";
import { Text, Box, Heading, Center, VStack, Input } from "native-base";
import logo from "./assets/adaptive-icon1.png";
import { useFonts } from "expo-font";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoginScreen({ navigation }) {
  const [loaded] = useFonts({
    PTSansNarrowReg: require("./assets/fonts/PTSansNarrow-Regular.ttf"),
    PTSansNarrowBold: require("./assets/fonts/PTSansNarrow-Bold.ttf"),
  });
  const [showPassword, setShowPassword] = useState(true);
  const [passwordText, setPasswordText] = useState(true);
  const [emailText, setEmailText] = useState(true);
  const handlePress = () => {
    navigation.navigate("SignUp");
  };
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
            console.log("Login Pressed");
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
                emailText={emailText}
                emailPresent={true}
              />
              <InputText
                label="Password"
                icon="lock"
                placeholder="Enter Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={showPassword}
                passwordPresent={true}
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                passwordText={passwordText}
              />
              <LoginButton
                onPress={() => {
                  if (values.email != "" && values.password != "") {
                    handleSubmit();
                    setEmailText(true);
                    setPasswordText(true);
                  } else if (values.email === "" && values.password === "") {
                    setEmailText(false);
                    setPasswordText(false);
                  } else if (values.email === "") {
                    setEmailText(false);
                    setPasswordText(true);
                  } else if (values.password === "") {
                    setPasswordText(false);
                    setEmailText(true);
                  }
                }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Login
                </Text>
              </LoginButton>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    marginRight: 10,
                    marginTop: 40,
                  }}
                >
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={handlePress}>
                  <Text
                    style={{
                      textAlign: "center",
                      marginRight: 10,
                      color: "#949494",
                      textDecorationLine: "underline",
                    }}
                  >
                    Sign up for free!
                  </Text>
                </TouchableOpacity>
              </View>
            </FormBox>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const InputText = ({
  label,
  icon,
  passwordPresent,
  emailPresent,
  setShowPassword,
  showPassword,
  passwordText,
  emailText,
  ...props
}) => {
  return (
    <View>
      <LoginInputLabel>{label}</LoginInputLabel>
      <LoginTextInput {...props} />
      <LoginInputIcon>
        <Octicons name={icon} size={30} />
      </LoginInputIcon>
      {passwordPresent && (
        <TextEyeHideIcon
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <Ionicons
            name={showPassword ? "md-eye-off" : "md-eye"}
            size={20}
            color={"#FF442A"}
          />
        </TextEyeHideIcon>
      )}
      {!emailText && emailPresent && <EmailError>[Email Required]</EmailError>}
      {!passwordText && passwordPresent && (
        <EmailError>[Password Required]</EmailError>
      )}
    </View>
  );
};

export default LoginScreen;
