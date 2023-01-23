import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./SignUpScreen";
import Login from "./LoginScreen";
import UserPage from "./UserPage";
import Home from "./Home";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { ContextCredentials } from "./components/ContextCredentials";

const Stack = createStackNavigator();

const NavigateStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SignUp">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default NavigateStack;
