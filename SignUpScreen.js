import React, { useState, useContext } from "react";
import axios from "axios";
import {
  StyledContainer,
  InnerContainer,
  Logo,
  LoginTitle,
  FormBox,
  LoginTextInput,
  LoginButton,
  LoginInputLabel,
  LoginInputIcon,
  TextEyeHideIcon,
  EmailError,
} from "./styles";
import { Image, View, TouchableOpacity, Linking } from "react-native";
import { Text, Box, Heading, Center, VStack, Input } from "native-base";
import logo from "./assets/sign-up-logo.png";
import { useFonts } from "expo-font";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContextCredentials } from "./components/ContextCredentials";

const SignUpScreen = ({ navigation }) => {
  const { signUp } = useContext(ContextCredentials);
  const [loaded] = useFonts({
    PTSansNarrowReg: require("./assets/fonts/PTSansNarrow-Regular.ttf"),
    PTSansNarrowBold: require("./assets/fonts/PTSansNarrow-Bold.ttf"),
  });
  const [showPassword, setShowPassword] = useState(true);
  const [passwordText, setPasswordText] = useState(true);
  const [emailText, setEmailText] = useState(true);
  const [firstNameText, setFirstNameText] = useState(true);
  const [lastNameText, setLastNameText] = useState(true);
  const handlePress = () => {
    navigation.navigate("Login");
  };
  if (!loaded) {
    return null;
  }
  return (
    <StyledContainer>
      <InnerContainer>
        <Logo
          source={logo}
          style={{ resizeMode: "contain", height: 80, width: 400 }}
        />
        <LoginTitle style={{ fontFamily: "PTSansNarrowBold" }}>
          Sign Up
        </LoginTitle>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            try {
              const response = await axios({
                method: "post",
                url: "https://7005-2603-3003-2900-2200-e5f1-112b-862d-c14f.ngrok.io/api/auth/signup",
                timeout: 100000,
                data: {
                  firstname: values.firstName,
                  lastname: values.lastName,
                  email: values.email,
                  password: values.lastName,
                },
              }).then(async (response) => {
                const name = response.data.firstname;
                await signUp(name);
              });
            } catch (err) {
              console.log(err);
            }
            console.log(values);
            console.log("Sign Up Pressed");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <FormBox>
              <InputText
                label="First Name"
                icon="person"
                placeholder="Enter First Name"
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                firstNamePresent={true}
                firstNameText={firstNameText}
              />
              <InputText
                label="Last Name"
                icon="person"
                placeholder="Enter Last Name"
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                lastNamePresent={true}
                lastNameText={lastNameText}
              />
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
                  if (
                    values.email != "" &&
                    values.password != "" &&
                    values.firstName != "" &&
                    values.lastName != ""
                  ) {
                    handleSubmit();
                    setEmailText(true);
                    setPasswordText(true);
                    setFirstNameText(true);
                    setLastNameText(true);
                  } else if (
                    values.email === "" &&
                    values.password === "" &&
                    values.firstName === "" &&
                    values.lastName === ""
                  ) {
                    setEmailText(false);
                    setPasswordText(false);
                    setFirstNameText(false);
                    setLastNameText(false);
                  } else if (
                    values.firstName != "" &&
                    values.lastName === "" &&
                    values.email === "" &&
                    values.password === ""
                  ) {
                    setFirstNameText(true);
                    setLastNameText(false);
                    setEmailText(false);
                    setPasswordText(false);
                  } else if (
                    values.firstName === "" &&
                    values.lastName != "" &&
                    values.email === "" &&
                    values.password === ""
                  ) {
                    setFirstNameText(false);
                    setLastNameText(true);
                    setEmailText(false);
                    setPasswordText(false);
                  } else if (
                    values.firstName === "" &&
                    values.lastName === "" &&
                    values.email != "" &&
                    values.password === ""
                  ) {
                    setFirstNameText(false);
                    setLastNameText(false);
                    setEmailText(true);
                    setPasswordText(false);
                  } else if (
                    values.firstName === "" &&
                    values.lastName === "" &&
                    values.email != "" &&
                    values.password === ""
                  ) {
                    setFirstNameText(false);
                    setLastNameText(false);
                    setEmailText(true);
                    setPasswordText(false);
                  } else if (
                    values.firstName === "" &&
                    values.lastName === "" &&
                    values.email === "" &&
                    values.password != ""
                  ) {
                    setFirstNameText(false);
                    setLastNameText(false);
                    setEmailText(false);
                    setPasswordText(true);
                  } else if (
                    values.firstName != "" &&
                    values.lastName != "" &&
                    values.email === "" &&
                    values.password === ""
                  ) {
                    setFirstNameText(true);
                    setLastNameText(true);
                    setEmailText(false);
                    setPasswordText(false);
                  } else if (
                    values.firstName != "" &&
                    values.lastName === "" &&
                    values.email != "" &&
                    values.password === ""
                  ) {
                    setFirstNameText(true);
                    setLastNameText(false);
                    setEmailText(true);
                    setPasswordText(false);
                  } else if (
                    values.firstName != "" &&
                    values.lastName === "" &&
                    values.email === "" &&
                    values.password != ""
                  ) {
                    setFirstNameText(true);
                    setLastNameText(false);
                    setEmailText(false);
                    setPasswordText(true);
                  } else if (
                    values.firstName === "" &&
                    values.lastName != "" &&
                    values.email != "" &&
                    values.password === ""
                  ) {
                    setFirstNameText(false);
                    setLastNameText(true);
                    setEmailText(true);
                    setPasswordText(false);
                  } else if (
                    values.firstName === "" &&
                    values.lastName != "" &&
                    values.email === "" &&
                    values.password != ""
                  ) {
                    setFirstNameText(false);
                    setLastNameText(true);
                    setEmailText(false);
                    setPasswordText(true);
                  } else if (
                    values.firstName === "" &&
                    values.lastName === "" &&
                    values.email != "" &&
                    values.password != ""
                  ) {
                    setFirstNameText(false);
                    setLastNameText(false);
                    setEmailText(true);
                    setPasswordText(true);
                  } else if (
                    values.firstName === "" &&
                    values.lastName != "" &&
                    values.email != "" &&
                    values.password != ""
                  ) {
                    setFirstNameText(false);
                    setLastNameText(true);
                    setEmailText(true);
                    setPasswordText(true);
                  } else if (
                    values.firstName != "" &&
                    values.lastName === "" &&
                    values.email != "" &&
                    values.password != ""
                  ) {
                    setFirstNameText(true);
                    setLastNameText(false);
                    setEmailText(true);
                    setPasswordText(true);
                  } else if (
                    values.firstName != "" &&
                    values.lastName != "" &&
                    values.email === "" &&
                    values.password != ""
                  ) {
                    setFirstNameText(true);
                    setLastNameText(true);
                    setEmailText(false);
                    setPasswordText(true);
                  } else if (
                    values.firstName != "" &&
                    values.lastName != "" &&
                    values.email != "" &&
                    values.password === ""
                  ) {
                    setFirstNameText(true);
                    setLastNameText(true);
                    setEmailText(true);
                    setPasswordText(false);
                  }
                }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Sign Up
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
                  Already have an account?
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
                    Login Here
                  </Text>
                </TouchableOpacity>
              </View>
            </FormBox>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const InputText = ({
  label,
  icon,
  passwordPresent,
  emailPresent,
  setShowPassword,
  showPassword,
  passwordText,
  emailText,
  firstNameText,
  lastNameText,
  firstNamePresent,
  lastNamePresent,
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
      {!firstNameText && firstNamePresent && (
        <EmailError>[First Name Required]</EmailError>
      )}
      {!lastNameText && lastNamePresent && (
        <EmailError>[Last Name Required]</EmailError>
      )}
    </View>
  );
};
export default SignUpScreen;
