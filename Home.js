import React, { useContext, useEffect } from "react";
import { Center, Text } from "native-base";
import { Image, View, TouchableOpacity, Linking } from "react-native";
import { ContextCredentials } from "./components/ContextCredentials";

function Home() {
  const { logout } = useContext(ContextCredentials);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User Token Valid</Text>
      <TouchableOpacity>
        <Text onPress={() => logout()}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
