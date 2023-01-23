import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./SignUpScreen";
import Login from "./LoginScreen";
import UserPage from "./UserPage";
import Home from "./Home";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { ContextCredentials } from "./components/ContextCredentials";

const Stack = createStackNavigator();

const NavigateStack2 = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserPage" component={UserPage} />
    </Stack.Navigator>
  );
};

export default NavigateStack2;
