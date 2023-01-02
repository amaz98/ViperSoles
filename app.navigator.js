import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./SignUpScreen";
import Login from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const NavigateStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigateStack;
