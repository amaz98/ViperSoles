import React, { useContext, useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUp from "./SignUpScreen";
import Login from "./LoginScreen";
import UserPage from "./UserPage";
import Home from "./Home";
import SneakersScreen from "./SneakersScreen";
import ClothingScreen from "./ClothingScreen";
import CartScreen from "./CartScreen";
import PolicyScreen from "./PolicyScreen";
import DrawerComponent from "./DrawerComponent";
import JordanScreen from "./JordanScreen";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { ContextCredentials } from "./components/ContextCredentials";
import { PTSansNarrow_400Regular } from "@expo-google-fonts/pt-sans-narrow";
import { LinearGradient } from "react-native-svg";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigateStack2 = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#fff",
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: "PTSansNarrow_400Regular",
          fontSize: 22,
          color: "#000",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => <MaterialIcons name="house" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Sneakers"
        component={SneakersScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="shoe-sneaker" size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Clothing"
        component={ClothingScreen}
        options={{
          drawerIcon: () => <Ionicons name="shirt" size={20} />,
        }}
      />
      <Drawer.Screen
        name="My Cart"
        component={CartScreen}
        options={{
          drawerIcon: () => <FontAwesome5 name="shopping-cart" size={20} />,
        }}
      />
      <Drawer.Screen
        name="My Account"
        component={UserPage}
        options={{
          drawerIcon: () => <FontAwesome5 name="user-alt" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Policy"
        component={PolicyScreen}
        options={{
          drawerIcon: () => <FontAwesome5 name="file-contract" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Jordan"
        component={JordanScreen}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
};

export default NavigateStack2;
