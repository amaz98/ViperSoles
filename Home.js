import React, { useContext, useEffect, useState } from "react";
import { Center, Text } from "native-base";
import { Image, View, TouchableOpacity, Linking } from "react-native";
import { ContextCredentials } from "./components/ContextCredentials";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

const Home = ({ navigation }) => {
  //const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("My Account");
  };
  const { logout } = useContext(ContextCredentials);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const getUser = async () => {
      let newUser = await AsyncStorage.getItem("userFirstName");
      if (newUser != null) {
        newUser = newUser.trim();
        newUser = newUser.replace(/"/g, "");
        setUserName(newUser);
      }
    };
    getUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{userName}</Text>
      <TouchableOpacity>
        <Text onPress={handlePress}>User Credentials</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={() => logout()}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
