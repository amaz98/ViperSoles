import React, { useContext, useEffect, useState } from "react";
import { Center, Text } from "native-base";
import { Image, View, TouchableOpacity, Linking } from "react-native";
import { ContextCredentials } from "./components/ContextCredentials";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserPage = () => {
  return (
    <View>
      <Text>User Credentials</Text>
    </View>
  );
};

export default UserPage;
